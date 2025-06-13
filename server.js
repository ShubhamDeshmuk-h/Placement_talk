const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors'); // Optional: if accessing API from different origin

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors()); // Optional, add only if you face CORS issues

// Test routes
app.get('/', (req, res) => res.send("Hello, world!"));
app.post('/', (req, res) => res.send(`Hello ${req.body.name}`));
app.get('/hello/:name', (req, res) => res.send(`Hello, this is what my name is ${req.params.name}`));

// Database wrapper
const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {
            useUnifiedTopology: true,
        });
        const db = client.db("Placement_talk");
        await operations(db);
        client.close(); // No await here is fine
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).json({ message: "Error connecting to database", error });
    }
};

// Route to get article by name
app.get('/api/article/:name', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;
        const articleInfo = await db.collection("articles").findOne({ name: articleName });

        if (!articleInfo) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.status(200).json(articleInfo);
    }, res);
});

// Route to add comments
app.post("/api/article/:name/add-comments", (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    if (!username || !text) {
        return res.status(400).json({ message: "Username and text are required." });
    }

    withDB(async (db) => {
        const articleInfo = await db.collection("articles").findOne({ name: articleName });

        if (!articleInfo) {
            return res.status(404).json({ message: "Article not found" });
        }

        const updatedComments = (articleInfo.comments || []).concat({ username, text });

        await db.collection("articles").updateOne(
            { name: articleName },
            {
                $set: {
                    comments: updatedComments,
                },
            }
        );

        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updatedArticleInfo);
    }, res);
});

// Start server
app.listen(PORT, () => console.log(`✅ Server started at port ${PORT}`));

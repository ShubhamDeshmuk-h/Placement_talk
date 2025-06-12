const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// Test routes
app.get('/', (req, res) => res.send("Hello, world!"));
app.post('/', (req, res) => res.send(`Hello ${req.body.name}`));
app.get('/hello/:name', (req, res) => res.send(`Hello, this is what my name is ${req.params.name}`));


const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        const db = client.db("Placement_talk");
        await operations(db);
        await client.close(); // FIXED: Added await to ensure proper closure
    } catch (error) {
        res.status(500).json({ message: "Error connecting to database", error });
    }
}

// MongoDB route
app.get('/api/article/:name', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;
        const articleInfo = await db.collection("articles").findOne({ name: articleName });
        res.status(200).json(articleInfo);
    }, res);
});

app.post("/api/article/:name/add-comments", (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDB(async (db) => {
        const articleInfo = await db
            .collection("articles")
            .findOne({ name: articleName });

        // FIXED: Added fallback for articleInfo.comments
        const updatedComments = (articleInfo.comments || []).concat({ username, text });

        await db.collection("articles").updateOne(
            { name: articleName },
            {
                $set: {
                    comments: updatedComments,
                },
            }
        );

        const updateArticleInfo = await db
            .collection('articles')
            .findOne({ name: articleName });

        res.status(200).json(updateArticleInfo);
    }, res);
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

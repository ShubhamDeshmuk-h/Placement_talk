const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// Test routes
app.get('/', (req, res) => res.send("Hello, world!"));
app.post('/', (req, res) => res.send(`Hello ${req.body.name}`));
app.get('/hello/:name', (req, res) => res.send(`Hello, this is what my name is ${req.params.name}`));

// MongoDB route
app.get('/api/article/:name', async (req, res) => {
    try {
        const articleName = req.params.name;
        const client = await MongoClient.connect(
            'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000',
            { useUnifiedTopology: true }
        );
        const db = client.db("Placement_talk");
        const article = await db.collection('article').findOne({ name: articleName });

        if (!article) {
            res.status(404).json({ message: 'Article not found' });
        } else {
            res.status(200).json(article);
        }

        client.close();
    } catch (error) {
        res.status(500).json({ message: "Error connecting to database", error });
    }
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

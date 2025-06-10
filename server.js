const express = require('express')
//telling node to load express in variable
const app = express()
//app is variabale used to initializ the application
const PORT = process.env.PORT || 8000
// we have defined the port and its number


const articlesInfo = {
    "learn-react":{
        comments:[],
    },
    "learn-node":{
        comments:[],
    },
    "my-thoughts-on-learning-react":{
        comments: [],
    }
}

//now we initialized the middleware

app.use(express.json({ extended: false }));



//this is test route for white tests the request 
app.get('/',(req,res)=> res.send("Hello , world!"));

app.post('/',(req,res)=>res.send(`Hello ${req.body.name}`));

app.get('/hello/:name',(req,res)=>res.send(`Hello this is what my name is ${req.params.name}`));
 

app.post('/api/articles/:name/add-comments', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    const article = articlesInfo[articleName];
    articlesInfo[articleName].comments.push({ username, text });
    res.status(200).send(article);
});

app.listen(8000,()=>console.log(`Server started at port ${PORT}`));

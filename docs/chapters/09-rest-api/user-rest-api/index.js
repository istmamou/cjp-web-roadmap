const express = require('express');
const database = require('./users');

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: "Hello World !"});
})

app.get('/users', (req, res) => {
    res.json({message: "List of all users", "data": database });
})

app.get('/users/:userId', (req, res) => {
    res.json({message: "Get one user"});
})

app.put('/users/:userId', (req, res) => {
    res.json({message: "Get one user"});
})

app.delete('/users/:userId', (req, res) => {
    res.json({message: "Get one user"});
})

app.listen(3000, () => {
    console.log('Listen on the port 3000...');
});
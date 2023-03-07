const express = require("express")
const app = express()
const port = 3000

// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

// Express Routes
const router = express.Router();

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req, res) => {
    const user = users[req.params.id - 1];
    res.send(user);
});

router.get('/', (req, res) => {
    res.send(fruits);
});

router.get('/:id', (req, res) => {
    const fruit = fruits[req.params.id - 1];
    res.send(fruit);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

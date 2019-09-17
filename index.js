const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Hello World')
})


server.get('/hobbits', (req, res) => {
    const hobbits = [
        {
            id: 0,
            name: 'Samwise'
        },
        {
            id: 1,
            name: 'Frodo'
        }
    ];
    res.status(200).json(hobbits);
})
server.listen(8000, () => console.log('server online'));
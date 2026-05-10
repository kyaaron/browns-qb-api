// Run 'pnpm start' to start this server

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const quarterbacks = require('./quarterbacks.json');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get("/api/:quarterback", (req, res) => {
    const {quarterback} = req.params;
    const data = quarterbacks[quarterback.toLowerCase()];

    if (data) {
        res.json(data);
    } else {
        res.status(404).send("Quarterback not found");
    }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

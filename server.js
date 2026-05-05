// Run 'pnpm start' to start this server

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const quarterbacks = {
    "tim couch": {
        "name": "Tim Couch",
        "number": 2,
        "years": "1999-2003",
        "numSeasons": 5
    },
    "ty detmer": {
        "name": "Ty Detmer",
        "number": 11,
        "years": "1999-2001",
        "numSeasons": 2
    },
    "kelly holcomb": {
        "name": "Kelly Holcomb",
        "number": 10,
        "years": "2001-2004",
        "numSeasons": 4
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get("/api/:quarterback", (req, res) => {
    const {quarterback} = req.params;
    const data = quarterbacks[quarterback.toLowerCase()];

    if (data) {
        res.json(quarterbacks[quarterback]);
    } else {
        res.status(404).send("Quarterback not found");
    }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
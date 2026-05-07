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
    "doug pederson": {
        "name": "Doug Pederson",
        "number": 18,
        "years": "2000",
        "numSeasons": 1
    },
    "spergon wynn": {
        "name": "Spergon Wynn",
        "number": 12,
        "years": "2000",
        "numSeasons": 1
    },
    "kelly holcomb": {
        "name": "Kelly Holcomb",
        "number": 10,
        "years": "2001-2004",
        "numSeasons": 4
    },
    "jeff garcia": {
        "name": "Jeff Garcia",
        "number": 5,
        "years": "2004",
        "numSeasons": 1
    },
    "luke mccown": {
        "name": "Luke McCown",
        "number": 16,
        "years": "2004",
        "numSeasons": 1
    },
    "trent dilfer": {
        "name": "Trent Dilfer",
        "number": 12,
        "years": "2005",
        "numSeasons": 1
    },
    "charlie frye": {
        "name": "Charlie Frye",
        "number": 9,
        "years": "2005-2007",
        "numSeasons": 3
    },
    "derek anderson": {
        "name": "Derek Anderson",
        "number": 3,
        "years": "2006-2009",
        "numSeasons": 4
    },
    "brady quinn": {
        "name": "Brady Quinn",
        "number": 10,
        "years": "2007-2009",
        "numSeasons": 3
    },
    "ken dorsey": {
        "name": "Ken Dorsey",
        "number": 11,
        "years": "2008",
        "numSeasons": 1
    },
    "bruce gradkowski": {
        "name": "Bruce Gradkowski",
        "number": 5,
        "years": "2008",
        "numSeasons": 1
    },
    "jake delhomme": {
        "name": "Jake Delhomme",
        "number": 17,
        "years": "2010",
        "numSeasons": 1
    },
    "colt mccoy": {
        "name": "Colt McCoy",
        "number": 12,
        "years": "2010-2012",
        "numSeasons": 3
    },
    "seneca wallace": {
        "name": "Seneca Wallace",
        "number": 6,
        "years": "2010-2011",
        "numSeasons": 2
    },
    "brandon weeden": {
        "name": "Brandon Weeden",
        "number": 3,
        "years": "2012-2013",
        "numSeasons": 2
    },
    "thad lewis": {
        "name": "Thad Lewis",
        "number": 4,
        "years": "2012",
        "numSeasons": 1
    },
    "jason campbell": {
        "name": "Jason Campbell",
        "number": 17,
        "years": "2013",
        "numSeasons": 1
    },
    "brian hoyer": {
        "name": "Brian Hoyer",
        "number": 6,
        "years": "2013-2014",
        "numSeasons": 2
    },
    "johnny manziel": {
        "name": "Johnny Manziel",
        "number": 2,
        "years": "2014-2015",
        "numSeasons": 2
    },
    "connor shaw": {
        "name": "Connor Shaw",
        "number": 9,
        "years": "2014",
        "numSeasons": 1
    },
    "josh mccown": {
        "name": "Josh McCown",
        "number": 13,
        "years": "2015-2016",
        "numSeasons": 2
    },
    "austin davis": {
        "name": "Austin Davis",
        "number": 9,
        "years": "2015",
        "numSeasons": 1
    },
    "robert griffin iii": {
        "name": "Robert Griffin III",
        "number": 10,
        "years": "2016",
        "numSeasons": 1
    },
    "cody kessler": {
        "name": "Cody Kessler",
        "number": 6,
        "years": "2016",
        "numSeasons": 1
    },
    "deshone kizer": {
        "name": "DeShone Kizer",
        "number": 7,
        "years": "2017",
        "numSeasons": 1
    },
    "kevin hogan": {
        "name": "Kevin Hogan",
        "number": 8,
        "years": "2017",
        "numSeasons": 1
    },
    "tyrod taylor": {
        "name": "Tyrod Taylor",
        "number": 5,
        "years": "2018",
        "numSeasons": 1
    },
    "baker mayfield": {
        "name": "Baker Mayfield",
        "number": 6,
        "years": "2018-2021",
        "numSeasons": 4
    },
    "case keenum": {
        "name": "Case Keenum",
        "number": 8,
        "years": "2021",
        "numSeasons": 1
    },
    "nick mullens": {
        "name": "Nick Mullens",
        "number": 12,
        "years": "2021",
        "numSeasons": 1
    },
    "jacoby brissett": {
        "name": "Jacoby Brissett",
        "number": 14,
        "years": "2022",
        "numSeasons": 1
    },
    "deshaun watson": {
        "name": "Deshaun Watson",
        "number": 4,
        "years": "2022-2024",
        "numSeasons": 3
    },
    "joe flacco": {
        "name": "Joe Flacco",
        "number": 15,
        "years": "2023-2025",
        "numSeasons": 2
    },
    "dorian thompson-robinson": {
        "name": "Dorian Thompson-Robinson",
        "number": 17,
        "years": "2023-2024",
        "numSeasons": 2
    },
    "pj walker": {
        "name": "P.J. Walker",
        "number": 11,
        "years": "2023",
        "numSeasons": 1
    },
    "jeff driskel": {
        "name": "Jeff Driskel",
        "number": 9,
        "years": "2023",
        "numSeasons": 1
    },
    "jameis winston": {
        "name": "Jameis Winston",
        "number": 5,
        "years": "2024",
        "numSeasons": 1
    },
    "bailey zappe": {
        "name": "Bailey Zappe",
        "number": 2,
        "years": "2024",
        "numSeasons": 1
    },
    "dillon gabriel": {
        "name": "Dillon Gabriel",
        "number": 5,
        "years": "2025",
        "numSeasons": 1
    },
    "shedeur sanders": {
        "name": "Shedeur Sanders",
        "number": 12,
        "years": "2025",
        "numSeasons": 1
    }
};

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

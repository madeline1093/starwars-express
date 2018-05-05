let express = require("express");
let app = express();
var bodyParser = require("body-parser");

let PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var characters = [{
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  }, {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  }, {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Knight",
    age: 60,
    forcePoints: 1350
}];

app.get('/', function(req, res){
    res.send("Welcome to the Starwars page");
    console.log('home page');
});

app.get("/", function(req, res) {
    res.send("Welcome to the Star Wars Page!");
});
  
  // Displays all characters
app.get("/api/characters", function(req, res) {
    return res.json(characters);
});
  
  // Displays a single character, or shows "No character found"
app.get("/api/characters/:character", function(req, res) {
// Grab the selected parameter
    var chosen = req.params.character;
    console.log(chosen);

    // Filter to show only the selected character
    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
        }
    }

    // Otherwise display "No character found"
    return res.send("No character found");
});


app.post("/api/characters", function(req, res) {
    var newcharacter = req.body;

    console.log(newcharacter);

    characters.push(newcharacter);

    res.json(newcharacter);
});


  // Listener
  // ===========================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
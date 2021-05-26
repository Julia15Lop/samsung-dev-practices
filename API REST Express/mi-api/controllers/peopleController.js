/* DB connection */
var db = require('../db/db');

db.connect('mongodb://localhost:27017', function (err) {
    if (err) {
        throw ('Fallo en la conexión con la BD');
    }
});

// Display all people
module.exports.people_list = function(req, res) {
    res.send('NOT IMPLEMENTED: List people');
};

// Create person
module.exports.people_create = function(req, res) {
    const person = {};
    person.name = req.body.name;
    person.phone = req.body.phone;

    db.get().db('mydb').collection('people').insertOne(person, function(err, result) {
        if (err) {
            throw("Fallo en la conexión con la BD");
        } else {
            res.send(result);
        }
    });
};
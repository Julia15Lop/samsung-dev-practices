/* DB connection */
var db = require('../db/db');

db.connect('mongodb://localhost:27017', function (err) {
    if (err) {
        throw ('Fallo en la conexión con la BD');
    }
});

/* Display all people */
module.exports.people_list = function(req, res) {
    if (db.get() === null) {
        next(new Error('[ERROR] La conexión no está establecida'));
        return;
    }
    db.get().db('apidb').collection('users').find().toArray(function(err, result) {
        if (err) {
            next ( new Error('[ERROR] Fallo en la conexión con la BD') );
            return;
        } else {
            res.send(result);
        }
    });
};

// Create person
module.exports.people_create = function(req, res) {
    if (db.get() === null) {
        next(new Error('[ERROR] La conexión no está establecida'));
        return;
    }
    const person = {};
    person.name = req.body.name;
    person.phone = req.body.phone;

    console.log(person.name);
    db.get().db('mydb').collection('people').insertOne(person, function(err, result) {
        if (err) {
            next ( new Error('[ERROR] Fallo en la conexión con la BD') );
            return;
        } else {
            res.send(result);
        }
    });
};

/* Update People */
module.exports.people_updates = function(req, res) {
    if (db.get() === null) {
        next(new Error('[ERROR] La conexión no está establecida'));
        return;
    }

    const filter = {id: req.body.id};
    const update = {$set: {name: req.body.name, phone: req.body.phone}};

    db.get().db('mydb').collection('people').updateOne(filter, update,
        function (err, result) {    
            if (err) {
                next ( new Error('[ERROR] Fallo en la conexión con la BD') );
                return;
            } else {
                res.send(result);
            }
    });
};

/* Delete People */
module.exports.people_delete = function(req, res) {
    if (db.get() === null) {
        next(new Error('[ERROR] La conexión no está establecida'));
        return;
    }

    const filter = {id: req.body.id};

    db.get().db('mydb').collection('people').deleteOne(filter, 
        function(err, result) {
            if (err) {
                next ( new Error('[ERROR] Fallo en la conexión con la BD') );
                return;
            } else {
                res.send(result);
            }
        });
};
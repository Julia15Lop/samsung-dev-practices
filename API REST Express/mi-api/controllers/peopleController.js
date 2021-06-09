/* DB connection */
var db = require('../db/db');

/* Validators */
const { validationResult } = require('express-validator')

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
    db.get().db('mydb').collection('people').find().toArray(function(err, result) {
        if (err) {
            next ( new Error('[ERROR] Fallo en la conexión con la BD') );
            return;
        } else {
            res.send(result);
        }
    });
};

/* Display some person */
module.exports.people_by_id = function(req, res, next) {
    if (db.get() === null) {
        next(new Error('[ERROR] La conexión no está establecida'));
        return;
    }

    var ObjectID = require('mongodb').ObjectID;
    const _id = new ObjectID(req.params.id);

    db.get().db('mydb').collection('people').find(_id).toArray(function(err, result) {
        if (err) {
            next ( new Error('[ERROR] Fallo en la conexión con la BD') );
            return;
        } else {
            res.send(result);
        }
    });
};


/* Create Person */
module.exports.people_create = function(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array()});
    }

    if (db.get() === null) {
        next(new Error('[ERROR] La conexión no está establecida'));
        return;
    }

    const person = {};
    person.name = req.body.name;
    person.surname = req.body.surname;
    person.age = req.body.age;
    person.dni = req.body.dni;
    person.birth = req.body.birth;
    person.color = req.body.color;
    person.sex = req.body.sex;

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
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array()});
    }

    if (db.get() === null) {
        next(new Error('[ERROR] La conexión no está establecida'));
        return;
    }

    var ObjectID = require('mongodb').ObjectID;
    const _id = new ObjectID(req.params.id);
    const filter = {_id: _id};
    
    const update = {
        $set: {
        name: req.body.name, 
        surname: req.body.surname,
        age: req.body.age,
        dni: req.body.dni,
        birth: req.body.birth,
        color: req.body.color,
        sex: req.body.sex
    }};

    console.log(req.body.age)
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
module.exports.people_delete = function(req, res, next) {
    if (db.get() === null) {
        next(new Error('[ERROR] La conexión no está establecida'));
        return;
    }
    
    var ObjectID = require('mongodb').ObjectID;
    const _id = new ObjectID(req.params.id);
    const filter = {_id: _id};

    console.log(filter);
    db.get().db('mydb').collection('people').deleteOne(filter, function(err, result) {
            if (err) {
                next ( new Error('[ERROR] Fallo en la conexión con la BD') );
                return;
            } else {
                res.send(result);
            }
        });
};
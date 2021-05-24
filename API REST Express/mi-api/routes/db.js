// Creaate mongo client
var mongoClient = require('mongodb').mongoClient;
var db = null;

// Connection db
module.exports.connect = function (url, callback) {
    if (db) {
        return callback();
    }

    const client = new mongoClient(url, {useNewUrlParser: true});

    client.connect(function (err, result){
        if (err) {
            return callback(err);
        }
        console.log("Conectado a BD");
        db = result;
        callback();
    });
}

// Close connection db
module.exports.close = function (callback) {
    if (db) {
        db.close(function(err, result) {
            console.log("Desconectado");
            db = null;
            callback(err);
        });
    }
}

// Get db connection
module.exports.get = function() {
    return db;
}
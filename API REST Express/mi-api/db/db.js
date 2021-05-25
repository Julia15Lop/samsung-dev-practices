// Crear el cliente de mongo
var MongoClient = require('mongodb').MongoClient;

// Variable para almacenar la conexión
var db = null;

/* Connect to database */
module.exports.connect = function (url, callback) {
    
    if (db) {
        return callback();
    }
    
    const client = new MongoClient(url, { useNewUrlParser: true });
    
    client.connect(function (err, result) {
        if (err) {
            return callback(err);
        }
        console.log("Conectado a BD");
        db = result;
        callback();
    });
};

/* Close connection with database */
module.exports.close = function (callback) {
    if (db) {
        db.close(function (err, result) {
            console.log("Desconectado de BD");
            db = null;
            callback(err);
        });
    }
};

/* MongoDB client connection */
module.exports.get = function () {
    return db;
}
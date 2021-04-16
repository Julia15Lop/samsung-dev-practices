// Database 
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'usuarios';
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});

// Service
const http = require('http');
const port = 3000;

// Query String
const queryString = require('query-string');

// Insert Function
const insertDocument = function (db, document, callback) {
    const collection = db.collection('usuarios');
    
    collection.insertOne(document, function (err, result) {
        if (err) {
            console.log("[Error] Insert document: ", err);
        }
        callback(err, result);
    });
}

// List function
const listDocument = function (db, callback) {
    const collection = db.collection('usuarios');

    collection.find({}).toArray(function (err, docs) {
        if (err) {
            console.log("[Error] List users: ", err);
        }
        callback(err, docs);
    }); 
}

// DB Connection
client.connect(function (err) {
    if (err) {
        console.log("[Error] Cannot connect to database: ", err);
        return;
    }

    // Service
    const server = http.createServer((request, response) => {
        const { headers, method, url} = request;
        const db = client.db(dbName);
    
        let body = [];
        var myJSON;
    
        request.on('error', (err) => {
            console.error(err);
        }).on('data', (chunk) => {
            
            body.push(chunk);
        }).on('end', () => {
            
            body = Buffer.concat(body).toString();
            const document = queryString.parse(body, {arrayFormat: 'comma'});

            if (document.name && document.phone){
                // Responses 
                response.statusCode = 200;
                response.setHeader('Content-Type', 'text/plain');
                
                if(method == 'GET') {
                    listDocument(db, function(err,result) {
                        if(!err){
                            console.log("Exist users: ", result);
                            myJSON = JSON.stringify(result);
                            response.end(myJSON);
                        }
                    });
                } else if (method == 'POST'){
                    
                    insertDocument(db, document, function (err, result) {
                        if (!err) {
                            console.log("Insert results: ", result.result);
                        }
                    });
        
                    listDocument(db, function(err, result){
                        if(!err){
                            console.log("Created users", result);
                            myJSON = JSON.stringify(result);
                            response.end(myJSON);
                        }
                    });
                }
            } else {
                // Responses 
                response.statusCode = 400;
                response.setHeader('Content-Type', 'text/plain');
                response.end('[Error] Use parameters: name, phone')
            }
        });
            
    });
    
    server.listen(port, () => {
        console.log('Running Server...');
    });
});


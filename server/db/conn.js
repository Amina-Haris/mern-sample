const {mongoClient, MongoClient} = require('mongodb');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db);

var _db;

module.exports={
    connectToserver: function(callback) {
        client.connect(function(err,db){
            if(db)
            {
                _db = db.db('employees');
                console.log('Successfully connected to MongoDB');
            }
            return callback(err);
        });
    },
    getDb: function(){
        return _db;
    }
}
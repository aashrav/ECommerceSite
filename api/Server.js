const MongoClient = require("mongodb").MongoClient;
const config = require("./config.json");
const mongoose = require('mongoose')
var express = require("express");
var bodyParser = require('body-parser');
const port = 5000;
const DBURL = config.DBURL;
const client = new MongoClient(DBURL , { useNewUrlParser: true, useUnifiedTopology: true });
app = express();

const cors = require('cors');
app.use(bodyParser.json())
app.use(cors()); 
app.use(
  bodyParser.urlencoded({
    extended:false
  })
)
// client.connect((err, dbInstance) => { 
//   if (err) {
//       console.log(`[MongoDB connection] ERROR: ${err}`);
//   } else { 
//       const dbObject = dbInstance.db("cmpe-131");
//       console.log("[MongoDB connection] SUCCESS");
//   } 
// });
mongoose.connect(DBURL, { useNewUrlParser: true, useUnifiedTopology: true });

var User = require('./routes/User');
app.use('/user', User);
 


app.listen(port,function(){
  console.log('Server is running on port: ' + port);
});
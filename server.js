import express from 'express';
import Routes from './routes/routes.js'
import bodyParser from 'body-parser'
import path from 'path';

import mongoose from 'mongoose'

//app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || 3001
let app = express()


app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/shopapp')
let db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
mongoose.Promise =global.Promise

app.use('/api/',Routes)
//app.use(bodyParser.urlencoded({ extended: true })); 


app.use((err, req, res, next) =>{
  console.log(err.message)
  res.status(422)
  res.send({error: err.message})
}


)
//app.use(express.static(path.join(__dirname + '/client/build/')));



app.listen  (3001, () => console.log('listening on ' + 3001 ));
 

 
// Simply pass the port that you want a MongoDB server to listen on.

/* server.open((err) => {
  if (err === null) {

    // You may now connect a client to the MongoDB
    // server bound to port 27017.
  }
});
 */



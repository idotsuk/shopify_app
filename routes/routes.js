import { MongoClient, Db, Server } from "mongodb";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import mongoose from "mongoose";
import User from "../models/User";
import Auth from "./auth.js";
const app = express();

app.get("/ping", (req, res, next) => {
  res.send({ express: "Express Connected!" });
});
app.use("/auth", Auth);

app.post("/newuser", (req, res, next) => {
  console.log(req.body)
  User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(next);
});

//app.use('/login',loginRoutes)

app.get("/getuser", (req, res, next) => {
  console.log(req.body);
});

/*   app.get('/',(req, res) =>  
  {console.log (path.resolve(__dirname,'/client/build/index.html'));
    res.sendFile(__dirname+'/index.html')
  res.status(500).send(console.log('NO PAGE?') )})
 */
/* app.get('/api/img/:imgname',(req, res) =>
{
  
res.sendFile(path.resolve(__dirname,'/client/src/img' , req.params.imgname))
res.status(500).send(path.resolve(__dirname,'/client/src/img' , req.params.imgname))
}) */

export default app;

import { MongoClient, Db, Server } from "mongodb";
import express from "express";

import mongoose from "mongoose";
import User from "../models/User";
const app = express();

app.post("/login", (req, res, next) => {

  console.log('request body is: '+ req.body.userName)
  User.findOne({ 'userName': req.body.userName })
  .exec((err, user) => {
          if (err) {
          return res.send({error: err});
        } else {
          if (user) {
            console.log(req.body)
            if (req.body.password === user.password) {
              return res.send(user);
            } else return res.send({failed: "Wrong password"});
          }
        return res.send({failed: "Wrong username"})
        }  
      })

});

export default app;

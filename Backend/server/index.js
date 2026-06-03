const express = require("express");
const server = express();
const cors = require("cors");
const { Technology } = require("../models");

server.use(express.json());
server.use(express.static(__dirname + "/../public"));
server.use(cors());

server.get("/api/technologies", async (req, res) => {
    try{
        let technologies = await Technology.find();
        technologies = technologies.map((technology) => {
            technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
            return technology
        });
        return res.send({
            status: 200,
            data: technologies,
            error: false
        });
    }
    catch(err) {
        return res.send({
            status: 400,
            message: "The error on route /api/technologies is: " + err,
            error: true
        })
    }
});

server.get("/api/technology/:id", async (req, res) => {
    const { id } = req.params;
    try{
        let technology = await Technology.findById(id);
        technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
        return res.send({
            status: 200,
            data: technology,
            error: false
        });
    }
    catch(err) {
        return res.send({
            status: 400,
            message: "The error on route /api/technology/" + id + " is: " + err,
            error: true
        })
    }
});

server.get("/api/technology/search/:name", async (req, res) => {
    try{
        const { name } = req.params;

        let technologies = await Technology.find({
            name: {$regex: new RegExp(name, "i")}
        });
        
        technologies = technologies.map((technology) => {
            technology.logo = `${req.protocol}://${req.headers.host}/img/${technology.logo}`;
            return technology
        });
        return res.send({
            status: 200,
            data: technologies,
            error: false
        });
    }
    catch(err) {
        return res.send({
            status: 400,
            message: "The error on route /api/technology/search/" + name +" is: " + err,
            error: true
        })
    }
});

module.exports = server;
const { response } = require("express");

class routes {
    constructor(app){
        this.app = app;
    }

    configure(){
        this.app.get("/api/authenticate/", (req, res = response) => {
            res.json({ status: 0 })
        })
    }

    configureWeb(){
        this.app.get("/", (req, res = response) => {
            res.sendFile("index.html", {
                root: `${__dirname}/../public/`
            });
        });
        this.app.get("/login", (req, res = response) => {
            res.sendFile("index.html", {
                root: `${__dirname}/../public/`
            });
        });
        this.app.get("/main", (req, res = response) => {
            res.sendFile("index.html", {
                root: `${__dirname}/../public/`
            });
        });
    }
}

module.exports = (app) => {
    return new routes(app);
}
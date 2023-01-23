const express = require("express");
const http = require("http");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());

const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);

// app.get("/api/secure", (req, res) => {
//     res.json({ message: "puerto"})
// })
app.use("/", express.static(__dirname + "/public"));

const route = require("./src/routes")(app);

route.configure();
route.configureWeb();


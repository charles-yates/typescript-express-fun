import bodyParser from "body-parser";
import express, {Router} from "express";
import path from "path";
import * as routes from "./routes";

const app = express();
app.set("port", process.env.PORT|| 3000);

if (process.env.NODE_ENV === "dev") {
    app.use(function (req, res, next) {
        res.set("Cache-Control", "no-cache");
        next();
    });
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization,X-Requested-With");

    // intercept OPTIONS method
    if ("OPTIONS" == req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }
});

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({extended: false, limit: "50mb"}));
app.use(express.static(path.join(__dirname, "./public")));
app.use("/", routes.router);

export default app;
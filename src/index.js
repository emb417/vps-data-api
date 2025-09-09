import express from "express";
import pino from "pino";
import pinoHttp from "pino-http";
import apiRouter from "./routers/api.js";
import VPSDataHelper from "./helpers/VPSDataHelper.js";

const PORT = 5080;

const app = express();
const logger = pino();
const httpLogger = pinoHttp({ logger });

app.use(httpLogger);
app.use(express.json());

// routing
app.use(
  "/api/v1",
  async function (req, res, next) {
    let vpsDataHelper = new VPSDataHelper();
    const json = await vpsDataHelper.getJson();
    req.vpsData = json;
    next();
  },
  apiRouter
);

// starting the server
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

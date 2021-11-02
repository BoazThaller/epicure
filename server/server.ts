import route from "./routes/route";
import dbConnection from "./config/dbConnection";

import express from "express";
import cors from "cors";

const app = express();

dbConnection();

app.use(cors());

app.use(express.json());
 
app.use("/api", route);

app.listen(3001, () => console.log("Listening on http://localhost:3001"));
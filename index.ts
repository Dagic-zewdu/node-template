import express from "express";
import dotenv from "dotenv";

import cors from "cors";
import appRouter from "./src/router";
const app = express();

dotenv.config();
const port = process.env.PORT || 9090;
const host = process.env.HOST || "http://localhost:";
app.use(
  cors(/*{
      origin: ["http://localhost:3000"],
    }*/)
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/v1", appRouter);

app
  .listen(port, () => {
    console.log(`Server running at ${host}${port}`);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });

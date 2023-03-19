import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoute from "./routes/posts.js";

// initialize the app
const app = express();

app.use("/posts", postRoute);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//connect server with database

const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server is up and running on port: ${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);

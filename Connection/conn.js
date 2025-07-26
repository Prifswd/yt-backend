import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/youtube-clone")
  .then(() => console.log("DB Connection successfull 🥳"))
  .catch((err) => {
    console.log(err);
  });

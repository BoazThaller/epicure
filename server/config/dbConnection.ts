import mongoose from "mongoose";

// //Set up default mongoose connection
const mongoDB = "mongodb://localhost/Epicure";
const dbConnection = async () => {
  await mongoose
    .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true } as {})
    .then()
    .catch((error) => {
      console.log(error);
    });
};

//Get the default connection
const db = mongoose.connection;

export default dbConnection;
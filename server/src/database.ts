import mongoose, { ConnectOptions } from "mongoose";
import config from "./config";

(async () => {
  try {
    const mongooseOptions: ConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      // user: config.MONGO_USER,
      // password: config.MONGO_PASSWORD,
    };
    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_database}`,
      mongooseOptions
    );
    // const db = await mongoose.connect('mongodb://localhost/MERNtypescript', mongooseOptions);
    console.log("database connected to:", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();

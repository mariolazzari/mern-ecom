import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected to ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`MongoDB connection error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDB;

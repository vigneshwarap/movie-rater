import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to database successfully: ${conn.connection.host}`);
  } catch (err) {
    console.error('Error while connecting to the database');
    console.error(err.message);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
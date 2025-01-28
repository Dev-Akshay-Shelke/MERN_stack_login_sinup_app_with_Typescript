import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/auth-db';
async function connectDB(): Promise<void> {
    try {
      await mongoose.connect(MONGODB_URI);
      console.log('Successfully connected to MongoDB');
      
      // Optional: Listen to connection events
      mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to DB');
      });
      
      mongoose.connection.on('error', (err) => {
        console.error('Mongoose connection error:', err);
      });
      
      mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected from DB');
      });
      
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      process.exit(1);
    }
  }
  
  export default connectDB;
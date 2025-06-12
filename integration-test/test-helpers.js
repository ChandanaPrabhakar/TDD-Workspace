import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const DB_NAME = 'TEST_DB';
const MONGO_URI = process.env.MONGO_URI;

let isConnected = false;

const connectToDB = async () => {
    if (!isConnected) {
        await mongoose.connect(MONGO_URI);
        isConnected = true;
    }
};

export const setDatabaseData = async (collectionName, data) => {
    await connectToDB();
    const collection = mongoose.connection.collection(collectionName);
    await collection.deleteMany({});
    await collection.insertMany(data);
};

export const getDatabaseData = async (collectionName) => {
    await connectToDB();
    const collection = mongoose.connection.collection(collectionName);
    return await collection.find().toArray();
};

export const resetDatabase = async () => {
    await connectToDB();
    await mongoose.connection.dropDatabase();
};

export const closeConnection = async () => {
    if (isConnected) {
        await mongoose.disconnect();
        isConnected = false;
    }
};

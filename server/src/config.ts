import dotenv from 'dotenv';
dotenv.config();

// console.log(process.env.TESTING_ENV)

export default{
    MONGO_database: process.env.MONGO_database || 'MERNtypescript',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    PORT: process.env.PORT || '4000',
}
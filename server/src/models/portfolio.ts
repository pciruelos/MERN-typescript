import { Schema, model, Document } from 'mongoose';

const portfolioSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    imgPath: {
        type: String,
        required: true,
        
    }
},
    {
        versionKey: false,
        timestamps: true
    });


interface Iportofolio extends Document {
    createdAt: string | Date;
    description: string;
    title: string;
    updatedAt: string | Date;
    url: string;
    _id?: string;
    imgPath: string;
}    
// nombre del esquema:Portfolio nombre del esquema:portfolioSchema

export default model<Iportofolio>('Portfolio', portfolioSchema)
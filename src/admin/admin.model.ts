import * as mongoose from "mongoose"

export const AdminSchema = new mongoose.Schema({

        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        }
        
    },
    {timestamps: true}
)
export interface Admin extends mongoose.Document{
    _id: string;
    username: string;
    password: string;
}
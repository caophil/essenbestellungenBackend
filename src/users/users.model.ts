import * as mongoose from "mongoose"

export const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email:{
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        firstname:{
            type: String
        },
        lastname: {
            type: String
        },
        personalnummer: {
            type: Number
        },
        role: {
            type: String
        },
        email: {
            type: String
        }

    },
    {timestamps: true}
    )

export interface User extends mongoose.Document {
    _id: string;
    username: string;
    email:string;
    password: string;
    firstname: string;
    lastname: string;
    personalnummer: number;
    role: string;
    email: string;
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<User>){}
    
    async insertUser(userName: string, email: string,password: string, firstname: string, lastname: string, personalnummer: number, role: string){
        const username = userName.toLowerCase();
        const newUser = new this.userModel({
            username,
            email,
            password,
            firstname,
            lastname,
            personalnummer,
            role,
        })
        newUser.save();
        return newUser;
    }

    async getUser(userName: string){
        const username = userName.toLowerCase();
        const user = await this.userModel.findOne({username});
        return user;
    }
}

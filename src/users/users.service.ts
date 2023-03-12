import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<User>){}
    
    async insertUser(userName: string, password: string, firstname: string, lastname: string, personalnummer: number){
        const username = userName.toLowerCase();
        const newUser = new this.userModel({
            username,
            password,
            firstname,
            lastname,
            personalnummer
        })
        await newUser.save();
        return newUser;
    }

    async getUser(userName: string){
        const username = userName.toLowerCase();
        const user = await this.userModel.findOne({username});
        return user;
    }
}

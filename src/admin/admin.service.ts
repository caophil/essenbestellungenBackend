import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model} from 'mongoose';
import {Admin} from './admin.model';

@Injectable()
export class AdminService {

    constructor(@InjectModel('admin') private readonly adminModel: Model<Admin>){}

    async insertAdmin(userName: string, password: string){
        const username = userName.toLowerCase();
        const newAdmin = new this.adminModel({
            username,
            password
        });
        await newAdmin.save();
        return newAdmin;
    }

    async getAdmin(userName: string){
        const username = userName.toLowerCase();
        const user = await this.adminModel.findOne({username});
        return user;
    }

}

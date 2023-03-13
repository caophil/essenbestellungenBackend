import { Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {AdminService} from 'src/admin/admin.service';


@Injectable()
export class AdminAuthService {

    constructor(private readonly adminService: AdminService){}
    
    async validateAdmin(username: string, password: string){
        const admin = await this.adminService.getAdmin(username);
        const passwordValid = await bcrypt.compare(password,admin.password)
        if(!admin){
            throw new NotAcceptableException('could not find the admin');
        }
        if(admin && passwordValid){
            return{
                adminId: admin.id,
                username: admin.username
            };
        }
        return null;
    }
}

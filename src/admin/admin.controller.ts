import { Controller, Post,Body, Request, UseGuards, Get } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {AdminService} from './admin.service';
import { LocalAdminAuthGuard } from 'src/admin-auth/local.admin-auth.guard';
import { AuthenticatedAdminGuard} from 'src/admin-auth/authenticatedAdmin.guard';
import { UsersService } from 'src/users/users.service';


@Controller('admin')
export class AdminController {

    constructor(private readonly adminService: AdminService){}

    @Post('/addAdmin')
    async addAdmin(
        @Body('username') username: string,
        @Body('password') password: string
    ){
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltOrRounds);
        const result = await this.adminService.insertAdmin(
            username,
            hashedPassword
        );
        return{
            msg: 'Admin successfully registered',
            userId: result.id,
            username: result.username
        };
    }

    @UseGuards(LocalAdminAuthGuard)
    @Post('/login')
    login(@Request() req): any{
        return{
            Admin: req.admin,
            msg: 'Admin logged in'
        };
    }

    @UseGuards(AuthenticatedAdminGuard)
    @Get('protected')
    getHello(@Request() req): string{
        return req.admin;
    }

}

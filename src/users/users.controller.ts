import { Body, Controller, Post, Request, UseGuards, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import {AdminGuard} from 'src/auth/admin.guard';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Post('/signup')
    async addUser(
        @Body('password') userPassword: string,
        @Body('username') username: string,
        @Body('firstname') firstname: string,
        @Body('lastname') lastname: string,
        @Body('personalnummer') personalnummer: number,
        @Body('role') role: string,
    ){
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);
        const result = await this.usersService.insertUser(
            username,
            hashedPassword,
            firstname,
            lastname,
            personalnummer,
            role
        );
        return{
            msg: 'User successfully registerd',
            userId: result.id,
            username: result.username
        };
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Request() req): any {
        return {
        User: req.user,
        msg: 'User logged in'};
    }

    @UseGuards(AuthenticatedGuard)
    @Get('/protected')
    getHello(@Request() req): string{
        return req.user;
    }

    @UseGuards(AdminGuard)
    @Get('/test')
    getTest(@Request() req): string{
        return "test test test";
    }

    @Get('/logout')
    logout(@Request() req): any {
        req.session.destroy();
        return{msg: "The user session has ended"}
    }
}

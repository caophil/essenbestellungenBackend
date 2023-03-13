    import { Injectable, UnauthorizedException } from '@nestjs/common';
    import { PassportStrategy } from '@nestjs/passport';
    import { Strategy } from 'passport-local';
    import { AdminAuthService } from './admin-auth.service';

    @Injectable()
    export class LocalAdminStrategy extends PassportStrategy(Strategy){

        constructor(private readonly adminAuthService: AdminAuthService){
            super();
        }

        async validate(userName: string, password: string): Promise<any>{
            const username = userName.toLowerCase();
            const admin = await this.adminAuthService.validateAdmin(username, password);
            if(!admin){
                throw new UnauthorizedException();
            }
            return admin;
        }
    }

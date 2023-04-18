import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"

@Injectable()
export class MyGuard implements CanActivate {
    async canActivate(context: ExecutionContext){
        const request = context.switchToHttp().getRequest();
        const params = request.params;
        const username = params.username;
        if(request.user.username == username){
            return true;
        }
        return false;
    }
}
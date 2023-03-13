import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common"


@Injectable()
export class AdminGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest()
    var result: boolean = false
    if(request.user.role == "admin"){
        result = true;
    }
    return result;
  }
}
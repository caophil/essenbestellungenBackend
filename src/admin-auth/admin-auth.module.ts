import { Module } from '@nestjs/common';
import { AdminAuthService } from './admin-auth.service';
import {AdminModule} from 'src/admin/admin.module';
import { PassportModule } from "@nestjs/passport"
import { stringLiteralTypeAnnotation } from '@babel/types';
import { LocalAdminStrategy } from './local.admin-strategy';
import {SessionSerializer} from 'src/auth/session.serializer';


@Module({
  imports: [AdminModule, PassportModule.register({session: true})],
  providers: [AdminAuthService, LocalAdminStrategy, SessionSerializer]
})
export class AdminAuthModule {}

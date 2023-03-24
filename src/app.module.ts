import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from "@nestjs/mongoose"
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { GerichtModule } from './gericht/gericht.module';
import { DayModule } from './day/day.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/essensbestellungen'),
    UsersModule,
    AuthModule,
    GerichtModule,
    DayModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

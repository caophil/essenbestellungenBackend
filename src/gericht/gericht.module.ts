import { Module } from '@nestjs/common';
import { GerichtService } from './gericht.service';
import { GerichtController } from './gericht.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {GerichtSchema, Gericht} from "./gericht";

@Module({
  imports:[MongooseModule.forFeature([{
    schema: GerichtSchema,
    name: Gericht.name
  }])],
  providers: [GerichtService],
  controllers: [GerichtController]
})
export class GerichtModule {}

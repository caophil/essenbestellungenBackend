import { Module } from '@nestjs/common';
import { BestellungController } from './bestellung.controller';
import { BestellungService } from './bestellung.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BestellungSchema, Bestellung } from './bestellung.model';

@Module({
  imports:[MongooseModule.forFeature([{
    schema: BestellungSchema,
    name: Bestellung.name
  }])],
  controllers: [BestellungController],
  providers: [BestellungService]
})
export class BestellungModule {}

import { Module } from '@nestjs/common';
import { GerichtService } from './gericht.service';
import { GerichtController } from './gericht.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GerichtSchema, Gericht, GerichtDocument } from './gericht';
import { Model } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Gericht.name,
        schema: GerichtSchema,
      },
    ]),
  ],
  providers: [
    GerichtService,
    {
      provide: 'GerichtModel',
      useFactory: (gerichtModel: Model<GerichtDocument>) => gerichtModel,
      inject: [Gericht.name],
    },
  ],
  controllers: [GerichtController],
})
export class GerichtModule {}

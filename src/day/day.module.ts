import { Module } from '@nestjs/common';
import { DayController } from './day.controller';
import { DayService } from './day.service';
import { Day, DaySchema } from './day';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{
    schema: DaySchema,
    name: Day.name
  }])],
  controllers: [DayController],
  providers: [DayService]
})
export class DayModule {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Day, DayDocument} from "./day";

@Injectable()
export class DayService {

    constructor(@InjectModel(Day.name)private dayModel: Model<DayDocument>){}

    createDay(day: Day):Promise<DayDocument>{
        const dayDoc = new this.dayModel(day);
        return dayDoc.save();
    }

}

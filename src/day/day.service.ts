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

    getDays():Promise<DayDocument[]>{
        return this.dayModel.find().exec();
    }
    getDay(id: string):Promise<DayDocument>{
        return this.dayModel.findById(id).exec();
    }

    async updateDay(id: string, newDay: Day): Promise<DayDocument>{
        const oldDay = await this.getDay(id);
        oldDay.date = newDay.date ? newDay.date : newDay.date;
        oldDay.menu1 = newDay.menu1 ? newDay.menu1 : newDay.menu1;
        oldDay.menu2 = newDay.menu2 ? newDay.menu2 : newDay.menu2;
        oldDay.nachtisch = newDay.nachtisch ? newDay.nachtisch : newDay.nachtisch;
        oldDay.suppe = newDay.suppe ? newDay.suppe : newDay.suppe;
        return oldDay.save();
    }

    deleteDay(id: string){
        return this.dayModel.deleteOne({
            _id: id
        })
    }
}

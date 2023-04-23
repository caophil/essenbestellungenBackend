import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {Gericht} from '../gericht/gericht';

export type DayDocument = Document & Day;

@Schema()
export class Day{
    @Prop()
    date: Date;
    @Prop()
    menu1: Gericht;
    @Prop()
    menu2: Gericht;
    @Prop()
    nachtisch: Gericht;
    @Prop()
    suppe: Gericht;

}

export const DaySchema = SchemaFactory.createForClass(Day);
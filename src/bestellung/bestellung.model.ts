import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import { Gericht } from '../gericht/gericht';

export type BestellungDocument = Document & Bestellung;

@Schema()
export class Bestellung{
    @Prop()
    date: Date;
    @Prop()
    username: String;
    @Prop()
    menu1: Gericht;
    @Prop()
    menu2: Gericht;
    @Prop()
    nachtisch: Gericht;
    @Prop()
    suppe: Gericht;
    @Prop()
    vegetarisch: Boolean;
    @Prop()
    kosten: Number;
}

export const BestellungSchema = SchemaFactory.createForClass(Bestellung);
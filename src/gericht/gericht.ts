import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

export type GerichtDocument = Document & Gericht;

@Schema()
export class Gericht{

    @Prop()
  name: string;
  @Prop()
    preis: number;
    @Prop()
    kategorie: Kategorie
}

enum Kategorie {
    menu,
    nachtisch,
    suppe,
}

export const GerichtSchema = SchemaFactory.createForClass(Gericht);
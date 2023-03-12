import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import {Gericht, GerichtDocument} from "./gericht"


@Injectable()
export class GerichtService {


    constructor(@InjectModel(Gericht.name) private gerichtModel: Model<GerichtDocument>){}

    createGericht(gericht: Gericht):Promise<GerichtDocument>{
        const gerichtDoc = new this.gerichtModel(gericht); 
        return gerichtDoc.save();
    }

}

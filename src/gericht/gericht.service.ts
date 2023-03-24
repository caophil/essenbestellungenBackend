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

    getGerichte():Promise<GerichtDocument[]>{
        return this.gerichtModel.find().exec();
    }

    getGericht(id: string):Promise<GerichtDocument>{
        return this.gerichtModel.findById(id).exec();
    }

    async updateGericht(id: string, newGericht: Gericht): Promise<GerichtDocument>{
        const oldGericht = await this.getGericht(id);
        oldGericht.name = newGericht.name ? newGericht.name : oldGericht.name;
        oldGericht.preis = newGericht.preis ? newGericht.preis : oldGericht.preis;
        oldGericht.kategorie = newGericht.kategorie ? newGericht.kategorie : oldGericht.kategorie;
        return oldGericht.save();

    }

    deleteGericht(id: string){
        return this.gerichtModel.deleteOne({
            _id: id
        });
    }
}

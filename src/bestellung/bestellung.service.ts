import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Bestellung, BestellungDocument} from './bestellung.model';

@Injectable()
export class BestellungService {

    constructor(@InjectModel(Bestellung.name)private bestellungModel: Model<BestellungDocument>){}

    createBestellung(bestellung: Bestellung):Promise<BestellungDocument>{
        const bestellungDoc = new this.bestellungModel(bestellung);
        return bestellungDoc.save();
    }

    getBestellungen():Promise<BestellungDocument[]>{
        return this.bestellungModel.find().exec();
    }

    deleteBestellung(id: string){
        return this.bestellungModel.deleteOne({
            _id: id
        })
    }

}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Bestellung, BestellungDocument} from './bestellung.model';
import {Overview} from './overview';

@Injectable()
export class BestellungService {

    overviews: Overview[];
    bestellungen: BestellungDocument[];

    constructor(@InjectModel(Bestellung.name)private bestellungModel: Model<BestellungDocument>){}

    createBestellung(bestellung: Bestellung):Promise<BestellungDocument>{
        const bestellungDoc = new this.bestellungModel(bestellung);
        return bestellungDoc.save();
    }

    getBestellungen():Promise<BestellungDocument[]>{
        return this.bestellungModel.find().exec();
    }

    getMyBestellungen(username: string):Promise<BestellungDocument[]>{
        return this.bestellungModel.find({
            username: username
        }).exec()
    }

    deleteBestellung(id: string){
        return this.bestellungModel.deleteOne({
            _id: id
        })
    }

    async getOverviews(): Promise<Overview[]>{

        this.bestellungen = [];
        this.overviews = [];

        this.bestellungen = await this.getBestellungen();

        this.bestellungen.forEach(bestellung => {
            var match: Overview[] = this.overviews.filter(e=>e.date.toLocaleDateString() == bestellung.date.toLocaleDateString());
            if(match.length<1){
                var overview = new Overview();
                overview.date = bestellung.date;
                overview.menu1Count=0;
                overview.menu2Count=0;
                overview.menu2VegCount=0;
                overview.nachtischCount=0;
                overview.suppeCount=0;
                //console.log(overview.date);
                if(bestellung.menu1){
                    overview.menu1Count +=1;
                    //console.log("men1 "+ overview.menu1Count);
                    
                }else if(bestellung.menu2){
                    if(bestellung.vegetarisch){
                        overview.menu2VegCount +=1;
                        //console.log("men2 veg  "+ overview.menu2VegCount);
                    }else{
                        overview.menu2Count +=1;
                        //console.log("men2 "+ overview.menu2Count);
                    }
                }
                if(bestellung.nachtisch){
                    overview.nachtischCount +=1;
                    //console.log("nachtisch "+ overview.nachtischCount);
                }
                if(bestellung.suppe){
                    overview.suppeCount +=1;
                    //console.log("suppe "+ overview.suppeCount);
                }
                //console.log(overview);
                this.overviews.push(overview);
                return;
            }
            if(bestellung.menu1){
                match[0].menu1Count +=1;
            }else if(bestellung.menu2){
                if(bestellung.vegetarisch){
                    match[0].menu2VegCount +=1;
                }else{
                    match[0].menu2Count +=1;
                }
            }
            if(bestellung.nachtisch){
                match[0].nachtischCount +=1;
            }
            if(bestellung.suppe){
                match[0].suppeCount +=1;
            }
        });
        
        /*
        this.getBestellungen().then((result)=>{
            result.forEach(bestellung => {
                var match: Overview[] = this.overviews.filter(e=>e.date.toLocaleDateString() == bestellung.date.toLocaleDateString());
                if(match.length<1){
                    var overview = new Overview();
                    overview.date = bestellung.date;
                    overview.menu1Count=0;
                    overview.menu2Count=0;
                    overview.menu2VegCount=0;
                    overview.nachtischCount=0;
                    overview.suppeCount=0;
                    //console.log(overview.date);
                    if(bestellung.menu1){
                        overview.menu1Count +=1;
                        //console.log("men1 "+ overview.menu1Count);
                        
                    }else if(bestellung.menu2){
                        if(bestellung.vegetarisch){
                            overview.menu2VegCount +=1;
                            //console.log("men2 veg  "+ overview.menu2VegCount);
                        }else{
                            overview.menu2Count +=1;
                            //console.log("men2 "+ overview.menu2Count);
                        }
                    }
                    if(bestellung.nachtisch){
                        overview.nachtischCount +=1;
                        //console.log("nachtisch "+ overview.nachtischCount);
                    }
                    if(bestellung.suppe){
                        overview.suppeCount +=1;
                        //console.log("suppe "+ overview.suppeCount);
                    }
                    //console.log(overview);
                    this.overviews.push(overview);
                    return;
                }
                
                if(bestellung.menu1){
                    match[0].menu1Count +=1;
                }else if(bestellung.menu2){
                    if(bestellung.vegetarisch){
                        match[0].menu2VegCount +=1;
                    }else{
                        match[0].menu2Count +=1;
                    }
                }
                if(bestellung.nachtisch){
                    match[0].nachtischCount +=1;
                }
                if(bestellung.suppe){
                    match[0].suppeCount +=1;
                }
                //console.log(match[0]);
            });
            //console.log(this.overviews);
            //return this.overviews;

        })
        console.log("hier "+this.overviews);
        return(this.overviews);*/
        return
    }

}

import {AdminGuard} from '../auth/admin.guard';
import {AuthenticatedGuard} from "../auth/authenticated.guard";
import {MyGuard} from '../auth/my.guard';
import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards} from '@nestjs/common';
import {BestellungService} from './bestellung.service';
import {BestellungDocument, Bestellung} from './bestellung.model';
import {Overview} from './overview';

@Controller('bestellung')
export class BestellungController {

    constructor(private bestellungService: BestellungService){}
    @UseGuards(AdminGuard)
    @Get('/overview')
    getOverview(){
        return this.bestellungService.getOverviews();
    }

    @UseGuards(AuthenticatedGuard)
    @Post()
    createBestellung(@Body() bestellung: Bestellung): Promise<BestellungDocument>{
        return this.bestellungService.createBestellung(bestellung);
    }

    @UseGuards(AdminGuard)
    @Get()
    getBestellungen():Promise<BestellungDocument[]>{
        return this.bestellungService.getBestellungen();
    }

    @UseGuards(MyGuard)
    @Get(':username')
    getMyBestellungen(@Param('username')username: string):Promise<BestellungDocument[]>{
        return this.bestellungService.getMyBestellungen(username)
    }

    @UseGuards(AuthenticatedGuard)
    @Delete(':id')
    deleteBestellung(@Param('id')id: string){
        return this.bestellungService.deleteBestellung(id);
    }

    

}

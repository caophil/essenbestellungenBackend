import {AdminGuard} from 'src/auth/admin.guard';
import {AuthenticatedGuard} from "src/auth/authenticated.guard";
import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards} from '@nestjs/common';
import {BestellungService} from './bestellung.service';
import {BestellungDocument, Bestellung} from './bestellung.model';

@Controller('bestellung')
export class BestellungController {

    constructor(private bestellungService: BestellungService){}

    @UseGuards(AuthenticatedGuard)
    @Post()
    createBestellung(@Body() bestellung: Bestellung): Promise<BestellungDocument>{
        return this.bestellungService.createBestellung(bestellung);
    }

    @UseGuards(AuthenticatedGuard)
    @Get()
    getBestellungen():Promise<BestellungDocument[]>{
        return this.bestellungService.getBestellungen();
    }

    @UseGuards(AuthenticatedGuard)
    @Delete(':id')
    deleteBestellung(@Param('id')id: string){
        return this.bestellungService.deleteBestellung(id);
    }

}

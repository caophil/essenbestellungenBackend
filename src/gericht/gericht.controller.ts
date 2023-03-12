import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards} from '@nestjs/common';
import {GerichtService} from "./gericht.service";
import {GerichtDocument, Gericht} from "./gericht";
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';



@Controller('gericht')
export class GerichtController {

    constructor(private gerichtService : GerichtService){}

    @UseGuards(AuthenticatedGuard)
    @Post()
    createGericht(@Body() gericht: Gericht): Promise<GerichtDocument>{
        return this.gerichtService.createGericht(gericht);
    
    }
    
    @UseGuards(AuthenticatedGuard)
    @Get()
    get():string{
        return "testtest"
    }


}

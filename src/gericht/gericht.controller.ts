import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards} from '@nestjs/common';
import {GerichtService} from "./gericht.service";
import {GerichtDocument, Gericht} from "./gericht";
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import {AdminGuard} from 'src/auth/admin.guard';



@Controller('gericht')
export class GerichtController {

    constructor(private gerichtService : GerichtService){}

    @UseGuards(AdminGuard)
    @Post()
    createGericht(@Body() gericht: Gericht): Promise<GerichtDocument>{
        return this.gerichtService.createGericht(gericht);
    
    }
    


}

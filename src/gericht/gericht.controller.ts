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


    @UseGuards(AuthenticatedGuard)
    @Get()
    getGerichte():Promise<GerichtDocument[]>{
        return this.gerichtService.getGerichte();
    }

    @UseGuards(AuthenticatedGuard)
    @Get(':id')
    getGericht(@Param('id')id: string):Promise<GerichtDocument>{
        return this.gerichtService.getGericht(id);
    }
    
    @UseGuards(AdminGuard)
    @Put(':id')
    updateGericht(@Param('id')id: string, @Body()newGericht: Gericht):Promise<GerichtDocument>{
        return this.gerichtService.updateGericht(id,newGericht);
    }

    @UseGuards(AdminGuard)
    @Delete(':id')
    deleteGericht(@Param('id')id: string){
        return this.gerichtService.deleteGericht(id);
    }



}

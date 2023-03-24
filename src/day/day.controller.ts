import {AdminGuard} from 'src/auth/admin.guard';
import {AuthenticatedGuard} from "src/auth/authenticated.guard";
import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards} from '@nestjs/common';
import{DayService} from "./day.service";
import {DayDocument, Day} from "./day";


@Controller('day')
export class DayController {

    constructor(private dayService: DayService){}

    @UseGuards(AdminGuard)
    @Post()
    createDay(@Body() day: Day): Promise<DayDocument>{
        return this.dayService.createDay(day);
    }

    @UseGuards(AuthenticatedGuard)
    @Get()
    getDays():Promise<DayDocument[]>{
        return this.dayService.getDays();
    }

    @UseGuards(AuthenticatedGuard)
    @Get(':id')
    getDay(@Param('id')id: string):Promise<DayDocument>{
        return this.dayService.getDay(id);
    }

    @UseGuards(AdminGuard)
    @Put(':id')
    updateDay(@Param('id')id: string, @Body()newDay: Day):Promise<DayDocument>{
        return this.dayService.updateDay(id,newDay);
    }

    @UseGuards(AdminGuard)
    @Delete(':id')
    deleteDay(@Param('id')id: string){
        return this.dayService.deleteDay(id);
    }
}

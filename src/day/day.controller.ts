import {AdminGuard} from 'src/auth/admin.guard';
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
}

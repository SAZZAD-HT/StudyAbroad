import {  Body,  Controller,  Delete,  FileTypeValidator,  Get,  MaxFileSizeValidator,  Param,  ParseFilePipe,  ParseIntPipe,  Patch,  Post,  Put,  Query,  Res,  Session,  UnauthorizedException,  UploadedFile,  UseGuards,  UseInterceptors,  UsePipes,  ValidationPipe,} from '@nestjs/common';
import { SearchDto } from 'src/DTO/SearchDto';
import { UniversityDto } from 'src/DTO/UniversityDto';
import { UniversityServices } from 'src/Services/UniversityServices';


@Controller('University')
export class UniversityController {

   
    constructor(private readonly universityService: UniversityServices
         ) {}
    
    @Get()
    async getUniversity() {
        return await this.universityService.getUniversity();
    }

    @Post('/create/University')
    async createUniversity(@Body() data:UniversityDto) {
        return await this.universityService.createUniversity(data);
    }
    @Put('/update/University/:IdUniversity')
    async updateUniversity(@Param('IdUniversity', ParseIntPipe) IdUniversity: number, @Body() data) {
        return await this.universityService.updateUniversity(IdUniversity, data);
    }
    @Get('/get/Porgramme')
    async getProgramme() {
        return await this.universityService.getProgramme();
    }
    @Post('/create/Programme')
    async createProgramme(@Body() data) {
        return await this.universityService.createProgramme(data);
    }
    @Get('/UniversityLanding')
    async UniversityLanding(@Body() data:SearchDto) {
        return await this.universityService.UniveersityLanding(data);
    }


        
}
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
    @Get('/get/University/:IdUniversity')
    async getUniversityById(@Param('IdUniversity', ParseIntPipe) IdUniversity: number) {
        return await this.universityService.getUniversityById(IdUniversity);
    }
    @Put('/update/University/:IdUniversity')
    async updateUniversity(@Param('IdUniversity', ParseIntPipe) IdUniversity: number, @Body() data) {
        return await this.universityService.updateUniversity(IdUniversity, data);
    }
    @Get('/get/Porgramme')
    async getProgramme() {
        return await this.universityService.getProgramme();
    }
    @Get('/get/Porgramme/:IdProgramme')
    async getProgrammeById(@Param('IdProgramme', ParseIntPipe) IdProgramme: number) {
        return await this.universityService.getProgrammeById(IdProgramme);
    }
    @Post('/create/Programme')
    async createProgramme(@Body() data) {
        return await this.universityService.createProgramme(data);
    }
    @Post('/UniversityLanding')
    async UniversityLanding(@Body() data:SearchDto) {
        return await this.universityService.UniveersityLanding(data);
    }
        @Get('/universityDDl')
        async universityDDl() {
            return await this.universityService.UniversityDDL();
        }
        @Get('/Location')
        async Location() {
            return await this.universityService.UniversityLocation();
        }

        
}
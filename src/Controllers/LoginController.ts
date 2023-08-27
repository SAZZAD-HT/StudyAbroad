import {  Body,  Controller,  Delete,  FileTypeValidator,  Get,  MaxFileSizeValidator,  Param,  ParseFilePipe,  ParseIntPipe,  Patch,  Post,  Put,  Query,  Res,  Session,  UnauthorizedException,  UploadedFile,  UseGuards,  UseInterceptors,  UsePipes,  ValidationPipe,} from '@nestjs/common';
import { DepartmentLoginDto } from 'src/DTO/DeptLoginDto';
import { SearchDto } from 'src/DTO/SearchDto';
import { UniversityDto } from 'src/DTO/UniversityDto';
import { LoginServices } from 'src/Services/LoginServices';
import { UniversityServices } from 'src/Services/UniversityServices';
import { LoginUserDto } from 'src/UserProfile/Dto/add.user.Dto';


@Controller('Login')
export class LoginController {

   
    constructor(private readonly Login: LoginServices
         ) {}
         @Get()
            async getUniversity() {
                return await this.Login.getUniversity();
            }
            @Post('/create')
            async createUniversity(@Body() data) {
                return await this.Login.createUniversity(data);
            }
            @Post('/signin')
            async login(@Body() data:DepartmentLoginDto) {
                console.log(data);
                return await this.Login.Login(data);
            }
         
            @Delete('/delete/:DepartmentId')
            async delete_dept_lgn(@Param('DepartmentId', ParseIntPipe) DepartmentId: number) {
                return await this.Login.deleteDepartmentlgn(DepartmentId);
            }


    
    

        
}
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentLoginDto } from 'src/DTO/DeptLoginDto';
import { OfferedProgramDto } from 'src/DTO/OfferedCourseDto';
import { SearchDto } from 'src/DTO/SearchDto';
import { UniversityDto } from 'src/DTO/UniversityDto';
import { LoginUserDto } from 'src/UserProfile/Dto/add.user.Dto';
import { DepartmentLoginEntity } from 'src/UserProfile/Entity/DepartmnetLoginEntity';
import { OfferedProgramEntity } from 'src/UserProfile/Entity/OfferedCourseEntity,';
import { Universityentity } from 'src/UserProfile/Entity/UniversityEntity';

import { Repository } from 'typeorm';


@Injectable()
export class LoginServices {

    constructor(
        @InjectRepository(DepartmentLoginEntity)
        private readonly Uni: Repository<DepartmentLoginEntity>,
        
    ) {}
    async createUniversity(data: DepartmentLoginEntity) {
        try {
            var data = await this.Uni.findOne({ where: { DeptEmail: data.DeptEmail } });
            if (data) {
                throw new NotFoundException('University already exist');
            }
          
            const university = await this.Uni.save(data);

            return university;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
    async getUniversity() {
        try {
            const university = await this.Uni.find();
            return university;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
    async Login(data: DepartmentLoginDto) {

    console.log(data);

        try{
            const university = await this.Uni.findOne({ where: { DeptEmail: data.DeptEmail , DeptPassword: data.DeptPassword }});
            console.log(university);
          if(university==null){
                throw new NotFoundException('University not found');
            
             }
                else{
                    return university;

                }
            

        }
        catch(error){
            throw new BadRequestException(error.message);
        }
    }
    async updateDepartmentlgn(DepartmentId: number, data: DepartmentLoginDto) {
        try {
            const university =await this.Uni.findOneBy({DepartmentId});
            if (!university) {
                throw new NotFoundException('University not found');
            }
            const updateUniversity = await this.Uni.update(DepartmentId, data);
            return updateUniversity;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
    async deleteDepartmentlgn(DepartmentId: number) {
        try {
            const university = await this.Uni.findOneBy({DepartmentId});
            if (!university) {
                throw new NotFoundException('University not found');
            }
            const deleteUniversity = await this.Uni.delete(DepartmentId);
            return deleteUniversity;
        } catch (error) {
            throw new BadRequestException(error.message);
        }}

   
        

    }

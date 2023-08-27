import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OfferedProgramDto } from 'src/DTO/OfferedCourseDto';
import { SearchDto } from 'src/DTO/SearchDto';
import { UniversityDto } from 'src/DTO/UniversityDto';
import { OfferedProgramEntity } from 'src/UserProfile/Entity/OfferedCourseEntity,';
import { Universityentity } from 'src/UserProfile/Entity/UniversityEntity';

import { Repository } from 'typeorm';


@Injectable()
export class UniversityServices {

    constructor(
        @InjectRepository(Universityentity)
        private readonly Uni: Repository<Universityentity>,
        @InjectRepository(OfferedProgramEntity)
        private readonly Programme: Repository<OfferedProgramEntity>,
    ) {}
    async createUniversity(data: UniversityDto) {
        try {
          
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

    async getUniversityById(IdUniversity: number) {
        try {
            const university = await this.Uni.findOneBy({IdUniversity});
            return university;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    
    }

    async updateUniversity(IdUniversity: number, data: UniversityDto) {
        try {
            const university =await this.Uni.findOneBy({IdUniversity});
            if (!university) {
                throw new NotFoundException('University not found');
            }
            const updateUniversity = await this.Uni.update(IdUniversity, data);
            return updateUniversity;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
    async deleteUniversity(IdUniversity: number) {
        try {
            const university = await this.Uni.findOneBy({IdUniversity});
            if (!university) {
                throw new NotFoundException('University not found');
            }
            const deleteUniversity = await this.Uni.delete(IdUniversity);
            return deleteUniversity;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
    async createProgramme(data: OfferedProgramDto) {
        try {
            const programme = await this.Programme.save(data);
            return programme;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
    async getProgramme() {
        try {
            const programme = await this.Programme.find();
            return programme;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
    async getProgrammeById(OfferedProgramID: number) {
        try {
           var  programme = await this.Programme.find({  where: { OfferedProgramID: OfferedProgramID },});
           
            return programme;
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }
    async updateProgramme(OfferedProgramID: number, data: OfferedProgramDto) {
        try {
            const programme = await this.Programme.findOneBy({OfferedProgramID});
            if (!programme) {
                throw new NotFoundException('Programme not found');
            }
            const updateProgramme = await this.Programme.update(OfferedProgramID, data);
            return updateProgramme;
        } catch (error) {
            throw new BadRequestException(error.message);
        }}
    async deleteProgramme(OfferedProgramID: number) {
        try {
            const programme = await this.Programme.findOneBy({OfferedProgramID});
            if (!programme) {
                throw new NotFoundException('Programme not found');
            }
            const deleteProgramme = await this.Programme.delete(OfferedProgramID);
            return deleteProgramme;
        } catch (error) {
            throw new BadRequestException(error.message);
        }}

        async UniveersityLanding(search: SearchDto){
            try { if(!search){

                const university = await this.Uni.find();
                
                
           
                return {university};}

                else{

                    var university = await this.Uni.findOne({
                        where: { UniversityName: search.search },
                      });
                    
                    // const university = await this.Uni
                    // .createQueryBuilder('university')
                    // .where('university.UniversityName LIKE :search', { search: `%${search}%` })
                    // .getMany();
                    return university;
                }
            } catch (error) {
                throw new BadRequestException(error.message);
            }
        }

        async UniversityLocation() {
            try {
                const universities = await this.Uni.find();
        
                // Map the universities to the required format for the dropdown
                const universityDDL = universities.map((university) => ({
                    IdUniversity: university.IdUniversity,
                    UniversityName: university.UniversityName,
                    UniversityCity: university.UniversityCity,
                    UniversityLongtitude: university.UniversityLongtitude,
                    UniversityLatitude: university.UniversityLatitude
                }));
        
                return universityDDL;
            } catch (error) {
                throw new BadRequestException(error.message);
            }
        }
        async UniversityDDL() {
            try {
                const universities = await this.Uni.find();
        
                // Map the universities to the required format for the dropdown
                const universityDDL = universities.map((university) => ({
                    IdUniversity: university.IdUniversity,
                    UniversityName: university.UniversityName,
                   
                }));
        
                return universityDDL;
            } catch (error) {
                throw new BadRequestException(error.message);
            }
        }
        

        async UniversityLandingById(IdUniversity: number){
            try {
                const university = await this.Uni.findOneBy({IdUniversity});
                const programme = await this.Programme.find();
                return {university,programme};
            } catch (error) {
                throw new BadRequestException(error.message);
            }
        }

    
        

    }

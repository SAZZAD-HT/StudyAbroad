import { Module } from '@nestjs/common';
import{TypeOrmModule} from '@nestjs/typeorm';
import { Universityentity } from '../Entity/UniversityEntity';
import { Coursesentity } from '../Entity/CourseEntity';
import { Udepartmententity } from '../Entity/UniDepartmentEnitty';
import { DepartmentLoginEntity } from '../Entity/DepartmnetLoginEntity';
import { NoticeEntity } from '../Entity/NoticeEntity';
import { OfferedProgramEntity } from '../Entity/OfferedCourseEntity,';
import { UniversityServices } from 'src/Services/UniversityServices';
import { UniversityController } from 'src/Controllers/universityController';
import { LoginServices } from 'src/Services/LoginServices';
import { LoginController } from 'src/Controllers/LoginController';


@Module({
	imports:[
	TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
        // host: 'localhost',
        // port: 3306,
        // username: 'root',
        // password: 'sazzad',
        // database: 'university',
        //entities: [Mosque,User,UserBookings,BookingMosque,Announcemententity],
        autoLoadEntities: true,
        synchronize: false,
	}),TypeOrmModule.forFeature([Universityentity,Coursesentity,Udepartmententity,DepartmentLoginEntity,NoticeEntity,OfferedProgramEntity])
	],
  providers: [UniversityServices,LoginServices],
  controllers: [UniversityController,LoginController]

  
})
export class DatabaseModulemosque {}

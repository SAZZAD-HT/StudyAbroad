import { Module } from '@nestjs/common';
import{TypeOrmModule} from '@nestjs/typeorm';
import { Universityentity } from '../Entity/UniversityEntity';
import { Coursesentity } from '../Entity/CourseEntity';
import { Udepartmententity } from '../Entity/UniDepartmentEnitty';
import { DepartmentLoginEntity } from '../Entity/DepartmnetLoginEntity';
import { NoticeEntity } from '../Entity/NoticeEntity';
import { OfferedProgramEntity } from '../Entity/OfferedCourseEntity,';


@Module({
	imports:[
	TypeOrmModule.forRoot({
      type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'sazzad',
        database: 'university',
        //entities: [Mosque,User,UserBookings,BookingMosque,Announcemententity],
        autoLoadEntities: true,
        synchronize: false,
	}),TypeOrmModule.forFeature([Universityentity,Coursesentity,Udepartmententity,DepartmentLoginEntity,NoticeEntity,OfferedProgramEntity])
	],
  providers: [],
  controllers: []

  
})
export class DatabaseModulemosque {}

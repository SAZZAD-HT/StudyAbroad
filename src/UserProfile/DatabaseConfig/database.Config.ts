import { Module } from '@nestjs/common';
import{TypeOrmModule} from '@nestjs/typeorm';
import { Universityentity } from '../Entity/UniversityEntity';
import { Coursesentity } from '../Entity/CourseEntity';
import { Udepartmententity } from '../Entity/UniDepartmentEnitty';


@Module({
	imports:[
	TypeOrmModule.forRoot({
      type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'sazzad',
        database: 'islam',
        //entities: [Mosque,User,UserBookings,BookingMosque,Announcemententity],
        autoLoadEntities: true,
        synchronize: false,
	}),TypeOrmModule.forFeature([Universityentity,Coursesentity,Udepartmententity,])
	],
  providers: [],
  controllers: []

  
})
export class DatabaseModulemosque {}

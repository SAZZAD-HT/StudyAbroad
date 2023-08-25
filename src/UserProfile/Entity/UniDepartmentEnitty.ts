import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class  Udepartmententity {
  @PrimaryGeneratedColumn('increment')
  UdepartmentId: number;
    @Column()
    UdepartmentName: string;
    @Column()
    UdepartmentDescription: string;
    @Column()
    UdepartmentCourses: string;
   
    @Column()
    UdepartmentCity: string;
    @Column()
    UdepartmentAddress: string;
    @Column()
    UdepartmentPhone: string;
    @Column()
    UdepartmentEmail: string;
    @Column()
    UniversityName: string;
    @Column()
    IsActive: string;  

}
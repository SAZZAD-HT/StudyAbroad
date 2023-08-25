import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class Coursesentity {
  @PrimaryGeneratedColumn('increment')
    IdCourses: number;

    @Column()
    CoursesName: string;
    @Column()
    CoursesDescription: string;
    @Column()
    CoursesUniversity: string;
    @Column()
    CourseDepartment: string;
    @Column()
    CourseGrade: string;
    @Column()
    CourseCredit: string;
    @Column()
    CourseFee: string;
    @Column()
    CourseDuration: string;
    @Column()
    CourseCampus: string;
    @Column()
    CourseFaculty: string;
    @Column()
    cStatus: string;
    @Column()
    UniversityName: string; 
    @Column()
   UniversirtyApproval: string;  

    @Column()
    IsActive: string;  

    
    
    

  
}
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class Universityentity{
  @PrimaryGeneratedColumn('increment')
   IdUniversity: number;
    @Column()
    UniversityName: string;   
    @Column()
    UniversityAddress: string;     
    @Column()
    UniversityPhone: string;
    @Column()
    UniversityEmail: string;
    @Column()
    UniversityCity: string;
    @Column()
    OfferedProgramID: Number;
    @Column()
    Ranking: Number;
    @Column()
    UniversityDescription: string;
    @Column()
    UniCity: string;
    @Column()
    UniversityLongtitude: string;
    @Column()
    UniversityLatitude: string;
    @Column({ nullable: true,length: 10000 })
    UniImage: string;
    @Column()
    IsActive: string;  

}
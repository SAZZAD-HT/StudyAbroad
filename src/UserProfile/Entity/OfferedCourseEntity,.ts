import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class OfferedProgramEntity{
  @PrimaryGeneratedColumn('increment')
  OID: number;
  @Column()
   OfferedProgramID: number;
   @Column()
    OfferedProgramName: string;
    @Column()
    Duration: string;
    @Column()
    TutionFee: string;
    @Column()
    DepartmentName: string;
    
    @Column()
    IsActive: string;  

}
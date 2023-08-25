import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class  DepartmentLoginEntity {
  @PrimaryGeneratedColumn('increment')
  
    DepartmentId: number;
    @Column()
    DeptUsername: string;
    @Column()
    DeptPassword: string;
    @Column()

    DeptEmail: string;
    @Column()
    Status: string;


}
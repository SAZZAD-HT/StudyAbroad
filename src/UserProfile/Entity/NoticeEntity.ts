import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class NoticeEntity {
  @PrimaryGeneratedColumn('increment')
  
   NoticeId: number;
    @Column()
    NoticeTitle: string;
    @Column()
    NoticeDescription: string;
    @Column()
    NoticeType: string;
    @Column()
    
    IsActive: string;  

}
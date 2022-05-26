import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Language } from '../enums/language.enum';

@Entity({ name: 'show_tv' })
export class ShowTvEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  duration: number;

  @Column()
  schedule: string;

  @Column()
  poster: string;

  @Column({
    type: 'decimal',
  })
  rating: number;

  @Column({
    type: 'enum',
    enum: Language,
  })
  language: string;
}

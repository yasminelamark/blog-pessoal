import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_temas' })
export class Tema {
  @PrimaryGeneratedColumn() // Chave primárie e Auto_Increment
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  descricao: string;
  postagem: any;
}

import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Postagem } from "../../postagem/entities/postagem.entity";

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    public id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    public nome: string

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty({example: "email@email.com.br"})
    public usuario: string

    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    public senha: string

    @Column({length: 5000})
    @ApiProperty()
    public foto: string

    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]
}
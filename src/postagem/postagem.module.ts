/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaService } from '../tema/services/tema.service';
import { PostagemController } from './controllers/postagem.controller';
import { Postagem } from './entities/postagem.entity';
import { PostagemService } from './services/postagem.service';
import { TemaModule } from '../tema/tema.module';


@Module({
  imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
  providers: [PostagemService, TemaService],
  controllers: [PostagemController],
  exports: [TypeOrmModule],
})
export class PostagemModule {}

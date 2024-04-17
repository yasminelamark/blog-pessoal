import { HttpStatus } from "@nestjs/common/enums";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";
import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common/decorators";
import { ParseIntPipe } from "@nestjs/common/pipes";

@Controller("/postagens")
export class PostagemController {
    postagemService: any;

    constructor(private readonly PostagemService: PostagemService) { }


    @Get('/:id')
    @HttpCode(HttpStatus.OK) // HTTP Status 200
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
        return this.postagemService.findAll();
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK) // HTTP Status 200
    findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
        return this.postagemService.findAByTitlo(titulo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem);
    }


}
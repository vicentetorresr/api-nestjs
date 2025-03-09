import { Body, Controller, Get, Post } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { createComentarioDTO } from './comentariosDTO';

@Controller('comentarios')
export class ComentariosController {
    constructor(private comentarioService: ComentariosService) {}

    @Post()
    createComentario(@Body() newComentario: createComentarioDTO) {
        return this.comentarioService.createComentario(newComentario);
    }

    @Get()
    getComentarios() {
        return this.comentarioService.getComentarios();
    }

    @Get(':id')
    getComentario(id: number) {
        return this.comentarioService.getComentario(id);
    }
}

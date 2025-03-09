import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comentario } from './comentarios.entity';
import { Repository } from 'typeorm';
import { createComentarioDTO } from './comentariosDTO';

@Injectable()
export class ComentariosService {
    constructor(@InjectRepository(Comentario) private comentarioRepository: Repository<Comentario>) {}

    createComentario(comentario: createComentarioDTO) {
        const newComentario = this.comentarioRepository.create(comentario);
        return this.comentarioRepository.save(newComentario);
    }

    getComentarios() {
        return this.comentarioRepository.find();
    }

    getComentario(id: number) {
        return this.comentarioRepository.findOne({
            where: {
                id: id
            }
        });
    }

    updateComentario(id: number, comentario: Comentario) {
        return this.comentarioRepository.update(id, comentario);
    }

    deleteComentario(id: number) {
        return this.comentarioRepository.delete(id);
    }
}

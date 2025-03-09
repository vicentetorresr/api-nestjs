import { Module } from '@nestjs/common';
import { ComentariosController } from './comentarios.controller';
import { ComentariosService } from './comentarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario } from './comentarios.entity';
import { Ticket } from 'src/tickets/tickets.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario, Ticket])],
  controllers: [ComentariosController],
  providers: [ComentariosService]
})
export class ComentariosModule {}

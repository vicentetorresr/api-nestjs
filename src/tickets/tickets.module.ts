import { Module } from '@nestjs/common';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './tickets.entity';
import { Comentario } from 'src/comentarios/comentarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, Comentario])],
  controllers: [TicketsController],
  providers: [TicketsService]
})
export class TicketsModule {}

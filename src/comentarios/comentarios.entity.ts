import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Ticket } from '../tickets/tickets.entity';

@Entity({ name: 'comentarios' })
export class Comentario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  contenido: string;

  @ManyToOne(() => Ticket, (ticket) => ticket.comentarios)
  ticket: Ticket;
}
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comentario } from '../comentarios/comentarios.entity';

@Entity({ name: 'tickets' })
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('text')
  descripcion: string;

  @Column({ default: 'abierto' })
  estado: string;

  @OneToMany(() => Comentario, (comentario) => comentario.ticket)
  comentarios: Comentario[];
}
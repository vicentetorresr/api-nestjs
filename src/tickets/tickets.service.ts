import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './tickets.entity';
import { Repository } from 'typeorm';
import { createTicketDTO, updateTicketDTO } from './ticketsDTO';

@Injectable()
export class TicketsService {
    constructor(@InjectRepository(Ticket) private ticketRepository: Repository<Ticket>) { }

    createTicket(ticket: createTicketDTO) {
        const newTicket = this.ticketRepository.create(ticket);
        return this.ticketRepository.save(newTicket);
    }

    getTickets() {
        return this.ticketRepository.find();
    }

    async getTicket(id: number) {
        const ticket = await this.ticketRepository.findOne({
            where: { id },
        });

        if (!ticket) {
            throw new HttpException('Ticket no encontrado', HttpStatus.NOT_FOUND);
        }

        return ticket;
    }

    async updateTicket(id: number, ticket: updateTicketDTO) {
        const existingTicket = await this.ticketRepository.findOne({
            where: { id },
        });

        if (!existingTicket) {
            throw new HttpException('Ticket no encontrado', HttpStatus.NOT_FOUND);
        }

        return await this.ticketRepository.update(id, ticket);
    }

    async deleteTicket(id: number) {
        const ticket = await this.ticketRepository.findOne({ where: { id } });

        if (!ticket) {
            throw new HttpException('No existe el ticket', HttpStatus.NOT_FOUND);
        }

        const result = await this.ticketRepository.delete({ id });

        if (result.affected === 0) {
            throw new HttpException('No se pudo eliminar el ticket', HttpStatus.BAD_REQUEST);
        }

        return { message: 'Ticket eliminado correctamente' };
    }

}

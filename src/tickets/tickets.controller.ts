import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { createTicketDTO, updateTicketDTO } from './ticketsDTO';
import { TicketsService } from './tickets.service';
import { Ticket } from './tickets.entity';

@Controller('tickets')
export class TicketsController {
    constructor (private ticketService : TicketsService) {}
    @Post()
    createTicket(@Body() newTicket: createTicketDTO) {
        return this.ticketService.createTicket(newTicket);
    }

    @Get()
    getTickets(): Promise<Ticket[]> {
        return this.ticketService.getTickets();
    }

    @Get(':id')
    getTicket(@Param('id', ParseIntPipe) id: number) {
        return this.ticketService.getTicket(id);
    }

    @Delete(':id')
    deleteTicket(@Param('id', ParseIntPipe) id: number) {
        return this.ticketService.deleteTicket(id);
    }

    @Patch(':id')
    updateTicket(@Param('id', ParseIntPipe) id: number, @Body() ticket: updateTicketDTO) {
        return this.ticketService.updateTicket(id, ticket);
    }

}

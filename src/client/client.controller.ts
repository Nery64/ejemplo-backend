import { Controller, Get, Param, ParseIntPipe, Put, Body, Delete, Post } from '@nestjs/common';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {

    constructor (private readonly clientService: ClientService){}

    @Get()
        getClients(){
            return this.clientService.findAll();
        }
    
        //READ
        @Get(':id')
        getClientById(@Param('id', ParseIntPipe) id: number){

            console.log(`el id a buscar es ${id}`)
            return this.clientService.findById(id);
        }
    
        //UPDATE
        @Put(':id')
        updateClientById(@Param('id', ParseIntPipe) id: number, @Body() body){

            console.log(`el id a actualizar es ${id}`)
            console.log(body);
            return this.clientService.updateClient(body, id);

        }

        //DELETE
        @Delete(':id')
        deleteClientById(@Param('id', ParseIntPipe) id: number){

            console.log(`el id a eliminar es ${id}`)
            return this.clientService.deleteClient(id);
        }

        //CREATE
        @Post()
        createClientById(@Body() body){

            
            console.log(body);
            return this.clientService.createClient(body);

        }
}

import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ClientService {

    private clients = [
        {
            id: 1,
            nombre: 'cliente 1',
            direccion: 'direccion 1',

        },
        {
            id: 2,
            nombre: 'cliente 2',
            direccion: 'direccion 2',
            
        }
    ]

    findAll(){
        return this.clients;
    }

    findById(id: number){
        const client = this.clients.find( c => c.id == id);

        if (!client){
            throw new NotFoundException(`CLient with id ${id} does not exist`);
        }
        return client;
    }

    updateClient(clienteBody, id){
        //Validaciones del CLiente
        const client = this.clients.find( c => c.id == id);

        
        if (!client){
            throw new NotFoundException(`CLient with id ${id} does not exist`);
        }
        
        //logica para actualizar datos cliente
        return {status:'cliente actualizado'}
    }

    deleteClient(id){
        const client = this.clients.find( c => c.id == id);

        
        if (!client){
            throw new NotFoundException(`CLient with id ${id} does not exist`);
        }
        
        //logica para eliminar datos cliente
        return {status:'cliente Eliminado'}
    }

    createClient(clientBody){
        //Validaciones del CLiente
        const client = this.clients.find( c => c.id === clientBody.id);

        
        if (client){
            throw new NotFoundException(`CLient with id ${clientBody.id} already exist`);
        }
        
        //logica para CREAR datos cliente
        return {status:'cliente creado'}
    }
}

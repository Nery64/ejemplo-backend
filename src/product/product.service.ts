import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
    
    private products = [
        {
            id: 1,
            nombre: 'Control XBOX ONE',
            cantidad: 19,
            Descrpcion: 'Rojo Cromado',
        },

        {
            id: 2,
            nombre: 'Consola PS5 Digital',
            cantidad: 6,
            Descrpcion: '1 control y 1 juego gratis',
        },
        
        {
            id: 3,
            nombre: 'Consola Xbox One S',
            cantidad: 15,
            Descrpcion: '2 controles y 1 juegos gratis',
        },

        {
            id: 4,
            nombre: 'Control PS5 DualSock',
            cantidad: 18,
            Descrpcion: 'Blanco',
        },
        {
            id: 5,
            nombre: 'Consola Xbox Series X',
            cantidad: 10,
            Descrpcion: '4k 120fps 1TB SSD',
        }

    ];
    public get productos() {
        return this.products;
    }
    public set productos(value) {
        this.products = value;
    }
    
        findAll(){
        return this.products;
        }
    
        findById(id: number){
    
    
            const products = this.products.find( c => c.id === id);
            
            if(!products){
            throw new NotFoundException(`Producto with id ${id} does not exist`);
            
            }
       
            return products; 
        }
    
        updateProducts(prodcutsBody, id){
    
            const products = this.products.find( c => c.id === id);
            if(!products){
            throw new NotFoundException(`Product with id ${id} does not exist`);
            
            }
                
            return {status:'Producto actualizado correctamente'}
        
        }
    
    
        deleteProducts(id){
    
            const products = this.productos.find( c => c.id === id);
            
            if(!products){
            throw new NotFoundException(`Prodcutos with id ${id} doese not exist`);
            
            }
                
            return {status:'Producto eliminado correctamente'}
        
        }
       
    
        createProducts(productsBody){
    
            const products = this.productos.find( c => c.id === productsBody.id);
            
            if(products){
            throw new NotFoundException(`Productos with id ${productsBody.id} already exist`);
            
            }
                
            return {status:'Producto creado correctamente'}
        
        }
}

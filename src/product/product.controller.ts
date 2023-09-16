import { Controller, Delete, Get, Param, Body, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    
    constructor (private readonly ProductService: ProductService){}

    @Get()
        getProducts(){
            return this.ProductService.findAll();
        }


    //READ
    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id: number){

        console.log(`el id a buscar es ${id}`)
        return this.ProductService.findById(id);
    }

    //UPDATE
    @Put(':id')
    updateProductById(@Param('id', ParseIntPipe) id: number, @Body() body){

        console.log(`el id a actualizar es ${id}`)
        console.log(body);
        return this.ProductService.updateProducts(body, id);

    }

    //DELETE
    @Delete(':id')
    deleteProductById(@Param('id', ParseIntPipe) id: number){

        console.log(`el id a eliminar es ${id}`)
        return this.ProductService.deleteProducts(id);
    }

    //CREATE
    @Post()
    createProductById(@Body() body){

        
        console.log(body);
        return this.ProductService.createProducts(body);

    }

}

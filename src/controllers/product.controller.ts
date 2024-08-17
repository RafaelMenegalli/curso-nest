import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductRepository } from "src/repositories/product.repository";

@Controller("/products")
export class ProductController {
    constructor (private productRepository: ProductRepository) { }

    @Post()
    async registerProduct(@Body() data) {
        console.log({data})

        const response = this.productRepository.saveProduct(data)

        return response
    }

    @Get()
    async listProducts() {
        const response = this.productRepository.listProduct()

        return response
    }
    
}
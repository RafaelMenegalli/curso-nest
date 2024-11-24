import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateProductDTO } from "src/DTOs/product/CreateProduct.dto";
import { ListProductDTO } from "src/DTOs/product/ListProductDTO";
import { ProductEntity } from "src/entities/product.entity";
import { ProductRepository } from "src/repositories/product.repository";
import { v4 as uuid } from "uuid";

@Controller("/products")
export class ProductController {
    constructor(private productRepository: ProductRepository) { }

    @Post()
    async registerProduct(@Body() data: CreateProductDTO) {
        const productEntity = new ProductEntity()
        productEntity.id = uuid()
        productEntity.nome = data.nome
        productEntity.valor = data.valor
        productEntity.quantidadeDisponivel = data.quantidadeDisponivel
        productEntity.descricao = data.descricao
        productEntity.caracteristicas = data.caracteristicas
        productEntity.imagens = data.imagens
        productEntity.categoria = data.categoria
        productEntity.dataCriacao = data.dataCriacao
        productEntity.dataAtualizacao = data.dataAtualizacao

        this.productRepository.saveProduct(productEntity)

        return {
            product: new ListProductDTO(productEntity.id, productEntity.nome),
            message: "Produto criado com sucesso"
        }
    }

    @Get()
    async listProducts() {
        const response = this.productRepository.listProduct()

        return response
    }

}
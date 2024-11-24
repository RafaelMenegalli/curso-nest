import { Injectable } from "@nestjs/common";
import { ProductEntity } from "src/entities/product.entity";

@Injectable()
export class ProductRepository {
    private products: ProductEntity[] = []

    async saveProduct(data: ProductEntity) {
        this.products.push(data)

        return {
            massege: "Produto cadastrado com sucesso!"
        }
    }

    async listProduct() {
        const data = this.products

        return data
    }
}
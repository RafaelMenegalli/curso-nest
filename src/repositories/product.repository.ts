import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductRepository {
    private products = []

    async saveProduct(data) {
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
import { Module } from "@nestjs/common";
import { ProductController } from "src/controllers/product.controller";
import { ProductRepository } from "src/repositories/product.repository";

@Module({
    imports: [],
    controllers: [ ProductController ],
    providers: [ ProductRepository ]
})

export class ProductModule { }
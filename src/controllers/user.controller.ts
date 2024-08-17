import { Controller, Post, Body, Get } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";

@Controller("/users")
export class UserController {
    constructor( private userRepository: UserRepository ) { }

    @Post()
    async registerUser(@Body() data) {

        this.userRepository.save(data)

        return {
            message: "Usuário cadastrado com sucesso!"
        }
    }

    @Get()
    async listUsers() {
        const response = this.userRepository.list()

        return response
    }
}
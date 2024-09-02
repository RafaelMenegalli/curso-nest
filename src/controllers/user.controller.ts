import { Controller, Post, Body, Get } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";
import { CreateUserDTO } from "src/DTOs/user/CreateUser.dto";

@Controller("/users")
export class UserController {
    constructor( private userRepository: UserRepository ) { }

    @Post()
    async registerUser(@Body() data: CreateUserDTO) {

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
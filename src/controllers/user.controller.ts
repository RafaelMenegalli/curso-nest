import { Controller, Post, Body, Get } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";
import { CreateUserDTO } from "src/DTOs/user/CreateUser.dto";
import { UserEntity } from "src/entities/user.entity";
import { v4 as uuid } from "uuid";
import { ListUserDTO } from "src/DTOs/user/ListUser.dto";

@Controller("/users")
export class UserController {
    constructor(private userRepository: UserRepository) { }

    @Post()
    async registerUser(@Body() data: CreateUserDTO) {
        const userEntity = new UserEntity()
        userEntity.id = uuid()
        userEntity.name = data.name
        userEntity.email = data.email
        userEntity.password = data.password

        this.userRepository.save(userEntity)

        return {
            user: new ListUserDTO(userEntity.id, userEntity.name),
            message: "Usuário cadastrado com sucesso!"
        }
    }

    @Get()
    async listUsers() {
        const response = await this.userRepository.list()
        const userList = response.map(user => new ListUserDTO(user.id, user.name))

        return userList
    }
}
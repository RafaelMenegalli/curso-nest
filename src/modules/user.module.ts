import { Module } from "@nestjs/common";
import { UserController } from "./../controllers/user.controller";
import { UserRepository } from "src/repositories/user.repository";
import { isUniqueEmailValidator } from "src/validators/user/isUniqueEmailValidator";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserRepository, isUniqueEmailValidator]
})

export class UserModule { }
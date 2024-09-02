import { IsEmail, IsString, IsNotEmpty, MinLength, IsStrongPassword } from "class-validator";

export class CreateUserDTO {
    @IsString({ message: "O campo de nome deve ser um texto!" })
    @IsNotEmpty({ message: "O campo nome não pode ser vazio" })
    name: string;

    @IsEmail(undefined, { message: "Esse não é um email válido!" })
    email: string;

    @IsStrongPassword()
    // @MinLength(8, { message: "A senha deve ter no mínimo 8 caracteres" })
    password: string;
}
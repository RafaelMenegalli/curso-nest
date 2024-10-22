import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "src/repositories/user.repository";

@Injectable()
@ValidatorConstraint({ async: true })
export class isUniqueEmailValidator implements ValidatorConstraintInterface {
    constructor(private userRepository: UserRepository) { }

    async validate(email: string, validationArguments?: ValidationArguments): Promise<boolean> {
        const userEmailAlreadyExists = await this.userRepository.emailAlreadyExists(email)
        return !userEmailAlreadyExists;
    }
}

export const IsUniqueEmail = (validationOptions: ValidationOptions) => {
    return (obj: Object, props: string) => {
        registerDecorator({
            target: obj.constructor,
            propertyName: props,
            options: validationOptions,
            constraints: [],
            validator: isUniqueEmailValidator
        })
    }
}
import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/entities/user.entity";

@Injectable()
export class UserRepository {
    private savedData: UserEntity[] = []

    async save(data: UserEntity) {
        this.savedData.push(data)
    }

    async list() {
        const data = this.savedData
        return data;
    }

    async emailAlreadyExists(email: string) {
        const alreadyExists = this.savedData.find(user => user.email === email)
        return alreadyExists !== undefined;
    }
}
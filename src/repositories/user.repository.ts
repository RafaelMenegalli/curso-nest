import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/entities/user.entity";

@Injectable()
export class UserRepository {
    private savedData: UserEntity[] = []

    private findUserById(id: string) {
        const userAlreadyExists = this.savedData.find(savedUser => savedUser.id === id)

        if (!userAlreadyExists) {
            throw new Error("Usuário não existe")
        }

        return userAlreadyExists;
    }

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

    async update(id: string, newData: Partial<UserEntity>) {
        const userAlreadyExists = this.findUserById(id)

        Object.entries(newData).forEach(([key, value]) => {
            if (key === 'id') {
                return;
            }

            userAlreadyExists[key] = value;
        })

        return userAlreadyExists;
    }

    async delete(id: string) {
        const userAlreadyExists = this.findUserById(id)

        this.savedData = this.savedData.filter(
            savedUser => savedUser.id !== id
        )

        return userAlreadyExists;
    }
}
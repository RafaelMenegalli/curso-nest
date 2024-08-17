import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository {
    private savedData = []

    async save(data) {
        this.savedData.push(data)
    }

    async list() {
        const data = this.savedData

        return data;
    }
}
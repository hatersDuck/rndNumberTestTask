import { randomInt } from "crypto";
import { AppRepository } from "./app.repository";
import { GeneratedNumberResponse } from "./models/generated.model";

const MIN = 1;
const MAX = 1000;

export class AppService {
    constructor(private readonly repository: AppRepository) {}

    generate() : number {
        const value : number = randomInt(MIN, MAX);
        this.repository.create(value);
        return value
    }

    retrieve(id: number) : GeneratedNumberResponse | undefined{
        return this.repository.findById(id);
    }
}
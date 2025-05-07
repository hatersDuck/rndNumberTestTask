import {
    GeneratedNumber,
    GeneratedNumberResponse,
} from './models/generated.model';

// Здесь можно было подключить БД или другое хранилище, проще всего конечно это сохранять в оперативной памяти (проще-лучше)
export class AppRepository {
    private readonly storage: GeneratedNumber[] = [];

    constructor() { }

    create(value: number): GeneratedNumberResponse {
        const id = this.storage.length;
        this.storage.push({
            value,
            timestamp: new Date().toISOString()
        });

        return { id, ...this.storage[id] };
    }
    findById(id: number): GeneratedNumberResponse | undefined {
        if (id < 0 || id >= this.storage.length)
            return undefined;

        return { id, ...this.storage[id] };
    }
}

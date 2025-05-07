import { Request, Response } from "express";
import { AppService } from "./app.service";

export class AppController {
    constructor(private readonly service: AppService) { }

    generate(req: Request, res: Response) {
        try {
            const value = this.service.generate()
            res.status(201).json(value);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    retrieve(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const generated = this.service.retrieve(id);
            generated ? res.json(generated) : res.status(404).json({ error: "Generated not found" })
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
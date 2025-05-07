import { Router } from "express";
import { AppRepository } from "./app.repository";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";

const router = Router();

const repository = new AppRepository();
const service = new AppService(repository);
const controller = new AppController(service);

router.post("/", controller.generate.bind(controller));
router.get("/:id", controller.retrieve.bind(controller));

export default router;
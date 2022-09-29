import { Controller } from "../../src/decorators/Controller/index";
import { Get } from "../../src/decorators/methods/index";
import { Request, Response } from "express";

@Controller()
export class MainController {
  @Get("/time")
  async IndexHandler(req: Request, res: Response) {
    // Bad practice
    res.status(200).send("Hello World");
    // God level practice
    res.reply(200, "Hello World");
  }
}

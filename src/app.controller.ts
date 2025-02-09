import { Controller, Get } from "@nestjs/common";

@Controller("/api")
export class AppController {
  @Get("/greeting")
  getRootRoute() {
    return "Hi there!";
  }
}

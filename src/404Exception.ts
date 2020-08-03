import { Catch, ExceptionFilter, ArgumentsHost, HttpStatus } from "@nestjs/common";
import { Response } from "express";

@Catch()
export class NotFound implements ExceptionFilter {
  catch(host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    const status = HttpStatus.NOT_FOUND;

    response.status(status).render('404', { pageTitle: 'Page Not Found', path: '/404' })
  }
}
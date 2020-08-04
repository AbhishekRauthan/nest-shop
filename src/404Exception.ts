import { Catch, ExceptionFilter, ArgumentsHost, HttpStatus, HttpException } from "@nestjs/common";
import { Response } from "express";

@Catch(HttpException)
export class NotFound implements ExceptionFilter {
  catch(exception: HttpException,host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response: Response = ctx.getResponse<Response>();
    const status = HttpStatus.NOT_FOUND;

    response.status(status).render('404', { pageTitle: 'Page Not Found', path: '/404' })
  }
}
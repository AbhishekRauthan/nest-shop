import { Catch, ExceptionFilter, ArgumentsHost, HttpStatus } from "@nestjs/common";

@Catch()
export class NotFound implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = HttpStatus.NOT_FOUND;

    response.status(status).render('404', { pageTitle: 'Page Not Found', path: '/404' })
  }
}
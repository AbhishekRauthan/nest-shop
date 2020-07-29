import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Page404Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    return res.status(404).render(
      '404',
      { docTitle: 'Error!', heading: 'Page not found' }
    )
  }
}

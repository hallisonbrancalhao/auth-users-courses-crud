import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class MultiplyMiddleware implements NestMiddleware {
  //Questão 7
  use(req: Request, res: Response, next: NextFunction) {
    req.body.valor = req.body.valor * 0.5;
    next();
  }
}

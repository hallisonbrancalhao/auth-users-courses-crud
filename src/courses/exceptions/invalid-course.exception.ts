import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidCourseException extends HttpException {
  constructor() {
    super('Não é permitido cursos de PHP', HttpStatus.FORBIDDEN);
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

getTurma(): string {
  return 'A turma JavaScript 04 é top!';
}
}
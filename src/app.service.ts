import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getWelcome(name: string) {
    return `welcome ${name}`;
  }

  getHi(name: string) {
    return `hi ${name}`;
  }
}

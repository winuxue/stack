import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private i = 0;

  getHello(): string {
    console.log(++this.i);
    return 'Welcome to NestJS Framework!';
  }
}
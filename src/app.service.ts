import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'I love you SAI DARLING! Yours lovingly VENKAT';
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'I love you PRAKASH \n Yours Lovingy VENKAT!';
  }
}

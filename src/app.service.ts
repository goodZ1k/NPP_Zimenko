import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getNumbers(): number {
    const x = 8;
    const y = 3 + x;
    return y;
  }
  getString(): string {
    const name = "Vladislav";
    return name;
  }
  getArrays(): number[] {
    const list: number[] = [1,2,3];
    return list;
  }
  



}

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
  getAnswer(): Promise<any> {
    let a,b :number;
    a = 12;
    b = 31;
    const res = this.checkNum(a,b);
    return res;
  }
  public async checkNum(a:number,b:number):Promise<any> {
    const res = [];
    res[0] = a + b;
    if(res[0] % 2 == 0) {
      res[1] = "Парне"
      return res;
    }else {
      res[1] = "Непарне"
      return res;
    }

  }



}

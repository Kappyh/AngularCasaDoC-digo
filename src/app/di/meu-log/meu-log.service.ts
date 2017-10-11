import { Injectable } from '@angular/core';

@Injectable()
export class MeuLogService {

  constructor() { }

  public setLog(msg: string):void {
    console.log(msg);
  }
}

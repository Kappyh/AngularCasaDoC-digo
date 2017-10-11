import { Injectable, Optional } from '@angular/core';
import { MeuLogService } from '../meu-log/meu-log.service';

@Injectable()
export class NomeTecService {

  constructor( @Optional() private meuLog: MeuLogService) { }

  public getNomesTec(): Array<string> {
    if (this.meuLog) {
      this.meuLog.setLog('consultou o array de tecnologias');
    }
    return ['Angular', 'Javascrip', 'Typescript', 'HTML'];
  }
}

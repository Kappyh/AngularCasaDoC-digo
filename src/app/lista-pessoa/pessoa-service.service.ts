import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  public nomesPessoas: Array<String> = ['João', 'Maria', 'Thiago']
  constructor() { }

  getPessoas(): Array<String> {
    return this.nomesPessoas;
  }

  setPessoas(nome: string): void {
    this.nomesPessoas.push(nome);
  }
}

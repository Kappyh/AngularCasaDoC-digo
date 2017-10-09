import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public habilitarBotao: boolean;
  public valores: Array<string>;
  public idade: number;

  constructor() { }

  ngOnInit() {
    this.habilitarBotao = false;
    this.valores = [];
    this.idade = 0;
  }

  public meuClick(): void {
    console.log("Evento meu click do botão");
  }

  public digitou($event): void {
    console.log("Estou digitando " + $event);
  }

  public digitouVarTemplate(valor): void {
    console.log(valor);
  }

  public validaSenha(valor: string): void {
    if (valor.length >= 5) {
      this.habilitarBotao = true;
    } else {
      this.habilitarBotao = false;
    }
  }

  public gravarSenha(senha) {
    alert('Senha grava com sucesso é: ' + senha);
  }

  public adicionar(conteudo: string): void {
    this.valores.push(conteudo);
  }

  verIdade(valor): void {
    let ano = new Date();
    this.idade = ano.getFullYear() - valor;
  }
}

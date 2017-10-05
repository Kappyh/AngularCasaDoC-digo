import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  public valorFonte: string;
  public tamanho: number;
  public validaFonte: boolean;
  public validaCor: boolean;

  constructor() { }

  ngOnInit() {
    this.tamanho = 20;
    this.validaCor = false;
    this.validaFonte = false;
  }

  public incrementar(): void {
    this.tamanho++;
    this.valorFonte = this.tamanho + 'px';
  }

  public mudaFonte(): void {
    this.validaFonte = !this.validaFonte;
  }

  public mudaCor(): void {
    this.validaCor = !this.validaCor;
  }

}

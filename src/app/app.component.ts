import { Component } from '@angular/core';

import { AlertaService } from './alerta/alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Livro Angular 2';
  public foto: string = 'favicon.ico';
  public desenvolvimento: Array<string> = [
    'Angular', 'Javascript', 'Typescript',
    'HTML', 'CSS', 'NodeJS'
  ];
  public valor: string;

  constructor(private _service: AlertaService) {

  }

  public enviarMsg(): void {
    this._service.msgAlerta();
  }

  public valorPassado(valorPassado) {
    this.valor = valorPassado;
  }

}

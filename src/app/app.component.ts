import { Component } from '@angular/core';

import { AlertaService } from './alerta/alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Livro Angular 2';
  foto: string = 'favicon.ico';

  constructor(private _service: AlertaService) {

  }

  public enviarMsg(): void {
    this._service.msgAlerta();
  }

}

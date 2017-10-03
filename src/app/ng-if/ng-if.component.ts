import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  public mostrarNome: boolean;
  public cursos:Array<string>;
  public curso: string;

  constructor() { }

  ngOnInit() {
    this.cursos = [];
  }

  mostrar(): void {
    this.mostrarNome = !this.mostrarNome;
  }

  public addCurso(curso){
    this.cursos.push(curso);
  }

  getValor(): boolean {
    return this.mostrarNome;
  }

}

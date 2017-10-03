import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  public nomes: Array<any>;
  constructor() { }

  ngOnInit() {
    this.nomes = [
      { id: 1, nome: 'Gabriela' },
      { id: 2, nome: 'Maria' },
      { id: 3, nome: 'Thiago' },
      { id: 4, nome: 'José' }
    ];
  }

  public meuSave(index: number, nomes: any) {
    return nomes.id;
  }

  public atualizar() {
    this.nomes = [
      { id: 1, nome: 'Larissa' },
      { id: 2, nome: 'Maria' },
      { id: 3, nome: 'Thiago' },
      { id: 4, nome: 'José' }
    ];
  }

}

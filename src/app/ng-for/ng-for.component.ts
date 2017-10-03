import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  public nomes: Array<string>;
  constructor() { }

  ngOnInit() {
    this.nomes = ['João', 'Maria', 'Thiago', 'José'];
  }

}

import { Component, OnInit } from '@angular/core';
import { NomeTecService } from './nome-tec/nome-tec.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DiComponent implements OnInit {

  public tecnologias: Array<string>;

  constructor(private meuService:NomeTecService) { }

  ngOnInit() {
    this.tecnologias = this.meuService.getNomesTec();
  }

}

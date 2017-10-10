import { Component, OnInit } from '@angular/core';
import { Contatos } from './contatos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public contato = new Contatos('Gabriela', 
  '(11)2222-2222', 'email@domino.com.br');

  constructor() { }

  ngOnInit() {
  }

  public enviarDados(){}

}

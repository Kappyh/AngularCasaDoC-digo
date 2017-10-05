import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  public valorClassBinding: boolean;

  constructor() { }

  ngOnInit() {
    this.valorClassBinding = false;
  }

  public mudarClassBinding():void {
    this.valorClassBinding = !this.valorClassBinding;
  }

  public classes(): Object {
    let valores = {
      'cor-fundo': this.valorClassBinding,
      'cor-letra': this.valorClassBinding,
      'borda-paragrafo': this.valorClassBinding
    }
    return valores;
  }
}

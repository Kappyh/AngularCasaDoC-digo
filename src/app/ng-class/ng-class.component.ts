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

  public mudarClassBinding() {
    this.valorClassBinding = !this.valorClassBinding;
  }
}

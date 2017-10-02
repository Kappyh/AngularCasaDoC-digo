import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public verParagrafo: boolean;

  constructor() { }

  ngOnInit() {
    this.verParagrafo = true;
  }

  public mostrar(): boolean {
    return this.verParagrafo = !this.verParagrafo;
  }

}

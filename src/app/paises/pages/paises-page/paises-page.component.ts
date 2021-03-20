import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises-page',
  templateUrl: './paises-page.component.html',
  styles: [],
})
export class PaisesPageComponent {
  termino: string = '';
  constructor() {}

  buscar() {
    console.log(this.termino);
    this.termino = '';
  }
}

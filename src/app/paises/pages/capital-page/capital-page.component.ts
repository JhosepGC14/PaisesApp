import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Country.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital-page',
  templateUrl: './capital-page.component.html',
  styles: [],
})
export class CapitalPageComponent {
  //variables
  termino: string = '';
  error: boolean = false;
  loading: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.error = false;
    this.paises = [];
    this.loading = true;
    this.termino = termino;
    this.paisService.searchCapital(termino).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.error = true;
        this.loading = false;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.error = false;

    // TODO: hacer las sugerencias
  }
}

import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Country.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-paises-page',
  templateUrl: './paises-page.component.html',
  styleUrls: ['./paises-page.component.css'],
})
export class PaisesPageComponent implements OnInit {
  //variables
  termino: string = '';
  error: boolean = false;
  loading: boolean = false;
  paises: Country[] = [];

  //constructor
  constructor(private paisService: PaisService) {}

  ngOnInit() {
    this.loading = true;
    this.paisService.getAllCountries().subscribe(
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

  buscar(termino: string) {
    this.error = false;
    this.paises = [];
    this.loading = true;
    this.termino = termino;
    this.paisService.searchCountry(termino).subscribe(
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

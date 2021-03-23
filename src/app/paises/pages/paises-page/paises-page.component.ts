import { Component, OnInit } from '@angular/core';
import { PaisByName } from '../../interfaces/PaisesByName.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-paises-page',
  templateUrl: './paises-page.component.html',
  styleUrls: ['./paises-page.component.css'],
})
export class PaisesPageComponent {
  //variables
  termino: string = '';
  error: boolean = false;
  loading: boolean = false;
  paises: PaisByName[] = [];

  //constructor
  constructor(private paisService: PaisService) {}

  buscar() {
    this.error = false;
    this.paises = [];
    this.loading = true;
    this.paisService.searchCountry(this.termino).subscribe(
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
}

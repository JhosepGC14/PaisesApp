import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../interfaces/Country.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais-page',
  templateUrl: './ver-pais-page.component.html',
  styles: [],
})
export class VerPaisPageComponent implements OnInit {
  //states
  loading: boolean = false;
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params
      .pipe(switchMap(({ idPais }) => this.paisService.detailCountry(idPais)))
      .subscribe((res) => {
        console.log(res);
        this.pais = res;
        this.loading = false;
      });
  }
}

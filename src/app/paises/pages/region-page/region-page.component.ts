import { Component } from '@angular/core';
import { Country } from '../../interfaces/Country.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-region-page',
  templateUrl: './region-page.component.html',
  styleUrls: ['./region-page.component.css'],
})
export class RegionPageComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActive: string = '';
  loading: boolean = false;
  paises: Country[] = [];

  constructor(private PaisService: PaisService) {}

  getClaseCss(region: string): string {
    return region === this.regionActive
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activateRegion(region: string) {
    if (this.regionActive === region) {
      return;
    }
    this.regionActive = region;
    this.loading = true;
    this.paises = [];

    this.PaisService.searchRegion(region).subscribe(
      (res) => {
        console.log(res);
        this.paises = res;
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }
}

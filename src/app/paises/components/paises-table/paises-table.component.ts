import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/Country.interfaces';

@Component({
  selector: 'app-paises-table',
  templateUrl: './paises-table.component.html',
  styleUrls: ['./paises-table.component.css'],
})
export class PaisesTableComponent {
  @Input() paises: Country[] = [];
  constructor() {}
}

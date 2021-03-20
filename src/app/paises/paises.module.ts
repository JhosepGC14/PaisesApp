import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//components
import { CapitalPageComponent } from './pages/capital-page/capital-page.component';
import { PaisesPageComponent } from './pages/paises-page/paises-page.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';
import { VerPaisPageComponent } from './pages/ver-pais-page/ver-pais-page.component';

@NgModule({
  declarations: [
    CapitalPageComponent,
    PaisesPageComponent,
    RegionPageComponent,
    VerPaisPageComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CapitalPageComponent,
    PaisesPageComponent,
    RegionPageComponent,
    VerPaisPageComponent,
  ],
})
export class PaisesModule {}

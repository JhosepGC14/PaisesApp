import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//component
import { CapitalPageComponent } from './paises/pages/capital-page/capital-page.component';
import { PaisesPageComponent } from './paises/pages/paises-page/paises-page.component';
import { RegionPageComponent } from './paises/pages/region-page/region-page.component';
import { VerPaisPageComponent } from './paises/pages/ver-pais-page/ver-pais-page.component';

const routes: Routes = [
  {
    path: '',
    component: PaisesPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: RegionPageComponent,
  },
  {
    path: 'capital',
    component: CapitalPageComponent,
  },
  {
    path: 'pais/:idPais',
    component: VerPaisPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

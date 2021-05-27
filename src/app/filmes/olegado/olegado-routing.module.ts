import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlegadoPage } from './olegado.page';

const routes: Routes = [
  {
    path: '',
    component: OlegadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlegadoPageRoutingModule {}

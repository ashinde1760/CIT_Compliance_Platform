import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientMasterComponent } from './client-master/client-master.component';

const routes: Routes = [
  {
    path:"client",
    component:ClientMasterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }

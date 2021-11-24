import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientMasterComponent } from './client-master/client-master.component';
import { DocumentManagerComponent } from './document-manager/document-manager.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:"client",
    component:ClientMasterComponent
  },
  {
    path:"user",
    component:UserComponent
  },
  {
    path:"mydoc",
    component:DocumentManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }

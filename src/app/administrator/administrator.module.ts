import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared_module/shared.module';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { ClientMasterComponent } from './client-master/client-master.component';

import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule } from '@angular/flex-layout';
import {TableModule} from 'primeng/table';
import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  declarations: [
    ClientMasterComponent
  ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    SidebarModule,
    ButtonModule,
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    FileUploadModule,
    HttpClientModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    FlexLayoutModule,
    TableModule,
    ReactiveFormsModule,
    ToggleButtonModule    
  ]
})
export class AdministratorModule { }

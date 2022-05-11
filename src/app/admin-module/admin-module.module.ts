import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BootcampsComponent } from './bootcamps/bootcamps.component';
import {SharedModule} from "../shared/shared.module";
import { UsersComponent } from './users/users.component';
import { AddBootcampComponent } from './add-bootcamp/add-bootcamp.component';
import { ManageBootcampComponent } from './manage-bootcamp/manage-bootcamp.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    BootcampsComponent,
    UsersComponent,
    AddBootcampComponent,
    ManageBootcampComponent
  ],
    imports: [
        CommonModule,
        AdminModuleRoutingModule,
        SharedModule,
        ReactiveFormsModule,
    ]
})
export class AdminModuleModule { }

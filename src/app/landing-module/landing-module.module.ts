import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingModuleRoutingModule } from './landing-module-routing.module';
import { HomeComponent } from './home/home.component';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import { BootcampDetailComponent } from './bootcamp-detail/bootcamp-detail.component';
import { OutletComponent } from './outlet/outlet.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    OutletComponent,
    HomeComponent,
    BootcampDetailComponent
  ],
  imports: [
    CommonModule,
    LandingModuleRoutingModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class LandingModuleModule { }

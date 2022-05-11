import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {RouterModule} from "@angular/router";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {FormModalComponent} from "./form-modal/form-modal.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ReplaceUnderscorePipe} from "./pipes/replace-underscore.pipe";



@NgModule({
  declarations: [
    NavBarComponent,
    FormModalComponent,
    ReplaceUnderscorePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavBarComponent,
    FormModalComponent,
    ReplaceUnderscorePipe,
  ],
  providers: [
    ReplaceUnderscorePipe
  ]
})
export class SharedModule { }

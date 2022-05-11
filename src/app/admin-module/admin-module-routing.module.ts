import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./home/home.component";
import {BootcampsComponent} from "./bootcamps/bootcamps.component";
import {UsersComponent} from "./users/users.component";
import {AddBootcampComponent} from "./add-bootcamp/add-bootcamp.component";
import {ManageBootcampComponent} from "./manage-bootcamp/manage-bootcamp.component";
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'bootcamps',
        component: BootcampsComponent
      },
      {
        path: 'bootcamps/add-bootcamp/:id',
        component: AddBootcampComponent
      },
      {
        path: 'bootcamps/bootcamp-detail/:id',
        component: BootcampsComponent
      },
      {
        path: 'bootcamps/manage-bootcamp/:id',
        component: ManageBootcampComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }

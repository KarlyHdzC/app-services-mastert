import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutosComponent} from '../autos/autos.component';
import { ReadAutoComponent } from '../read-auto/read-auto.component';
import { CreateAutoComponent } from '../create-auto/create-auto.component';

const routes: Routes = [
  {pathMatch: 'full', path:'', component:AutosComponent},
  {pathMatch: 'full', path:'autos/:id/detail', component:ReadAutoComponent},
  {pathMatch: 'full', path:'create', component:CreateAutoComponent},
  {pathMatch: 'full', path:'**', component:AutosComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }

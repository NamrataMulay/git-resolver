import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { Leftsideb1Component } from './leftsideb1/leftsideb1.component';

const routes: Routes = [

  { path: '', component: Leftsideb1Component },
{path: 'emp/:id', component: EmpComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

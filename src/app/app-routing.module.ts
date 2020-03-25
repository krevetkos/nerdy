import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component'
import { CreateTaskComponent } from './create-task/create-task.component';

const routes: Routes = [{path:'', component:RegistrationComponent},
{path:'task', component:CreateTaskComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

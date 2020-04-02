import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component'
import { CreateTaskComponent } from './create-task/create-task.component';
import { RegisterGuard } from './register.guard';

const routes: Routes = [{path:'', component:RegistrationComponent},
{path:'task',
component:CreateTaskComponent,
canActivate: [RegisterGuard]
},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

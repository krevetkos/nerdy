import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskItemComponent } from './create-task/task-item/task-item.component';
import { RegisterGuard } from './register.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CreateTaskComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [TaskItemComponent],
  providers: [RegisterGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

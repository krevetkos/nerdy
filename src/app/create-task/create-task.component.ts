import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { UserDataInterface } from '../interfaces/user-data.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
userData:UserDataInterface;
taskText:string = '';
someData;
tasks:Observable<Object>;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('user'));
    this.tasks = this.getTasks()
    console.log(this.tasks)
    this.tasks.pipe(
      map(data=>{
        this.someData = data;
        return this.someData;
      })
    ).subscribe()
  }

addTask(){
if(this.taskText.trim().length === 0) {
  return
}
this.api.addTask({user: this.userData, task: this.taskText});
this.taskText = '';
setTimeout(()=>{window.location.reload()},1500)
}
getTasks(){
 return  this.api.getTasks(this.userData)
}
}

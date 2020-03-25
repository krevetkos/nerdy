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
accessToken;
someData;
refreshToken;
tasks:Observable<Object>;
createTaskUrl = "https://serene-falls-61824.herokuapp.com/task/create"
getTasksUrl = "https://serene-falls-61824.herokuapp.com/task/"
  constructor(private api:ApiService) { }

  ngOnInit() {
    let data = JSON.parse(localStorage.getItem('user'));
    this.userData = data.user;
    this.accessToken = data.accessToken;
    this.refreshToken = data.refreshToken;
    this.tasks = this.getTasks()
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
this.api.addTask(this.createTaskUrl, {user: this.userData, task: this.taskText}, this.accessToken, this.refreshToken);
this.taskText = '';
setTimeout(()=>{window.location.reload()},1500)
}
getTasks(){
 return  this.api.getTasks(this.getTasksUrl,  this.userData, this.accessToken, this.refreshToken)
}
}

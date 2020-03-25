import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
@Input() item;
edit: boolean = true;
sharedWit = "";
editedValue;
sharedWitDB = "";
newValue = "";
data = JSON.parse(localStorage.getItem('user'));
accessToken = this.data.accessToken;
refreshToken = this.data.refreshToken;
deleteUpdateTasksUrl = "https://serene-falls-61824.herokuapp.com/task"
  constructor(private api:ApiService) { }

  ngOnInit() {
    if(this.item.shared.length > 0) {
      this.sharedWit = this.item.shared.join(', ');
    }
    this.editedValue  = {
      _id: this.item._id,
      shared: this.item.shared,
      value: this.item.value,
      owner: this.item.owner,
      ownerEmail: this.item.ownerEmail
    };
  }
saveItem(){
  if(this.sharedWitDB.trim().length !== 0){
    this.editedValue.shared.push(this.sharedWitDB)
  }
  if(this.newValue.trim().length !== 0){
    this.editedValue.value = this.newValue;
  }
  console.log(this.editedValue);
  this.api.editTask(this.deleteUpdateTasksUrl, this.item._id, this.editedValue,  this.accessToken, this.refreshToken)
  this.sharedWitDB = "";
  this.editedValue.value = "";
  this.edit = !this.edit;
  setTimeout(()=>{window.location.reload()},1500)
}
editItem(){
  this.edit = !this.edit;
}
cancelEdit(){
  this.sharedWitDB = "";
  this.editedValue.value = "";
  this.edit = !this.edit;
}
deleteItem(){
  this.api.deleteTask(this.deleteUpdateTasksUrl, this.item._id,  this.accessToken, this.refreshToken)
  setTimeout(()=>{window.location.reload()},1500)
}
}

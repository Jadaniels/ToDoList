import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, IonItemSliding } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {Observable} from 'rxjs';
import { database } from 'firebase';
import { Task } from './tasklist';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage {


taskList: AngularFireList<Task>;
tasks: Observable<any[]>;


//tasks : Array<any> = [];

//list  : string; 



  constructor( public alertCtrl: AlertController, public toastCtrl: ToastController, public af:AngularFireDatabase) { 
    this.taskList = this.af.list('/tasks');
    this.tasks = this.taskList.valueChanges();

  }

  async addItem(){
     let theNewTask: any = prompt("New Task");
     if (theNewTask !==''){
      let newTaskRef = this.taskList.push({
        id: '', title: data.theNewTask, status:'open'
      });
      newTaskRef.update({id: newTaskRef.key})
    }
  }

markAsDone(task:any) {
  task.status = "done";
  this.taskList.update(task.id,task);
 }

removeTask(task: any){
  task.status = "removed";
  this.taskList.remove(task.id);
  // let index = this.tasks.indexOf(task);
  // if (index > -1){
  //   this.tasks.splice(index,1);
  }
}





// async addItem(){
//   let prompt = await this.alertCtrl.create({
// header: 'New Items',
// message: 'Enter item to be added:',
// inputs: [{
//   name: 'userList',
//   type: 'text'
// }],
// buttons: [{
//   text: 'Cancel',
//   role: 'cancel'
// },{
// text: 'Save',
// handler: data => {
//   this.list = data.userList;
//   toast.present();
// }
// }]
//   });

// let toast = await this.toastCtrl.create({
//     message: 'Item Added',
//     duration: 5000,
//     showCloseButton: true,
//     color: 'success'
// })

// prompt.present();
// }


import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITask } from 'src/app/interfaces/ITask.metadata';
import { TaskService } from 'src/app/services/task.service';
import { ShowComponent } from '../show/show.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Output() refreshEmitter = new EventEmitter<boolean>();
  tasks:ITask[] = [];
  constructor(private taskService:TaskService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.taskService.getTaskList().subscribe((d:Array<ITask>) => {
      console.log(d);
      this.tasks = d;
    })
  }
  onOpenDialog(task:ITask) {
    const dialogRef = this.dialog.open(ShowComponent,
      {
        width: '100vh',
        data:task
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getTasks();
      this.refreshEmitter.emit(true);
    });
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITask, ITaskTypeOption } from 'src/app/interfaces/ITask.metadata';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  
  taskForm: FormGroup;
  typeOptions: Array<ITaskTypeOption> = [];
  constructor(
    public dialogRef: MatDialogRef<ShowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITask,
    private fb: FormBuilder,
    private taskService: TaskService
  ) { 

  }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.typeOptions = this.taskService.getTypeOptions();

    this.showTask();
  }

  showTask(){
    this.taskService.getTaskById(this.data.id).subscribe(
      (d:ITask) => {
        this.taskForm.controls['title'].setValue(d.title);
        this.taskForm.controls['type'].setValue(d.type);
        this.taskForm.controls['dueDate'].setValue(
          new Date(d.dueDate).toISOString()
        );
        this.taskForm.controls['description'].setValue(d.description);
      },(err) => console.error(err)
    );
  }

  updateTask(){
    console.log(this.taskForm.value);
    this.taskService.updateTask(this.taskForm.value,this.data.id).subscribe(
    (d)=>{
      console.log(d);
      this.dialogRef.close();
    },(err) => {
      console.error(err);
    })
  }

  onDeleteTask() {
    this.taskService.deleteTask(this.data.id).subscribe(
      (d) => {
        console.log(d);
        this.dialogRef.close();
      },
      (error) => console.error(error)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITaskTypeOption } from 'src/app/interfaces/ITask.metadata';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  taskForm: FormGroup;
  typeOptions: Array<ITaskTypeOption> = [];
  
  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router
  ) { 
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.typeOptions = this.taskService.getTypeOptions();
  }

  ngOnInit(): void {
  }

  addTask(){
    console.log(this.taskForm.value);
    this.taskService.saveTask(this.taskForm.value).subscribe((d )=>{
      this.router.navigateByUrl("/tasks")
    },(err) => {
      console.error(err);
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITask, ITaskTypeOption, ITypePercentage } from '../interfaces/ITask.metadata';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  getTaskList():Observable<Array<ITask>>{
    return this.http
    .get('http://localhost:8080/api/v1/tasks')
    .pipe(map((d:Array<ITask>) => d))
  }
  getTaskById(id:number):Observable<ITask>{
    return this.http
    .get(`http://localhost:8080/api/v1/task/${id}`)
    .pipe(map((d:ITask) => d))
  }
  getTypeOptions(): Array<ITaskTypeOption> {
    return [{ type: 'done' }, { type: 'todo' }, { type: 'pending' }];
  }

  saveTask(task:ITask):Observable<Array<ITask>>{
    return this.http
    .post('http://localhost:8080/api/v1/task',task)
    .pipe(map((d:Array<ITask>) => d))
  }
  updateTask(task:ITask,id:number):Observable<Array<ITask>>{
    return this.http
    .put(`http://localhost:8080/api/v1/task/${id}`,task)
    .pipe(map((d:Array<ITask>) => d))
  }
  deleteTask(id: number) {
    return this.http.delete(`http://localhost:8080/api/v1/task/${id}`);
  }
  getTypePercentage(): Observable<Array<ITypePercentage>> {
    return this.http
      .get(`http://localhost:8080/api/v1/task/vData/percentcounttype`)
      .pipe(map((d: Array<ITypePercentage>) => d));
  }
}
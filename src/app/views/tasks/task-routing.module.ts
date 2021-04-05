import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    path: '',
 
    children: [
      {
        path:'',
        redirectTo:'list',
    },
    {
      path: 'list',
      component: TaskComponent,
      data: { title: 'Basic', breadcrumb: 'Basic' }
    },
    {
      path:'add-task',
      component:AddComponent,
      data: { title: 'add Task', breadcrumb: 'add Task' },
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }

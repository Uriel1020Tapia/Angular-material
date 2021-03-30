import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ReadExcelComponent } from './read-excel/read-excel.component';

const routes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'basic',
      component: BasicFormComponent,
      data: { title: 'Basic', breadcrumb: 'Basic' }
    },
    {
      path: 'read-excel',
      component: ReadExcelComponent,
      data: { title: 'Leer excel', breadcrumb: 'Read excel' }
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }

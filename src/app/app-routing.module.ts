import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard/home",
    pathMatch: "full",
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./views/dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path:'forms',
        loadChildren: ()=> import("./views/forms/forms.module").then((m)=> m.AppFormsModule)
      },
      {
        path:'tasks',
        loadChildren: ()=> import("./views/tasks/tasks.module").then((m)=> m.TasksModule)
      }
    ],
  },
  {
    path: "**",
    redirectTo: "/dashboard/home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

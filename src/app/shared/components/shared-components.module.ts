import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedMaterialModule } from '../shared-material.module';
import { HeaderSideComponent } from './header-side/header-side.component';
import { SidebarSideComponent } from './sidebar-side/sidebar-side.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { FooterComponent } from './footer/footer.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

const components = [
  SidenavComponent,
  SidebarSideComponent,
  HeaderSideComponent,
  AdminLayoutComponent,
  AuthLayoutComponent,
  FooterComponent,
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    SharedMaterialModule,
    PerfectScrollbarModule
  ],
  exports:[
    ...components
  ]
})
export class SharedComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CarouselComponent } from '../forms/carousel/carousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    
    FlexLayoutModule,
    DashboardRoutingModule,
    PerfectScrollbarModule,
  ]
})
export class DashboardModule { }

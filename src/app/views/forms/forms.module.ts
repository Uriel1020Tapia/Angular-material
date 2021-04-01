import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatRadioModule } from "@angular/material/radio";
import { MatStepperModule } from "@angular/material/stepper";
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ReadExcelComponent } from './read-excel/read-excel.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReaderExcelDirective } from 'src/app/directives/reader-excel.directive';
import {MatTableModule} from '@angular/material/table';
import { FileToBase64Component } from './file-to-base64/file-to-base64.component';
@NgModule({
  declarations: [
    BasicFormComponent,
    ReadExcelComponent,
    ReaderExcelDirective,
    FileToBase64Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatStepperModule,
    MatTableModule,
    FlexLayoutModule,
    FormsRoutingModule
  ]
})
export class AppFormsModule { }

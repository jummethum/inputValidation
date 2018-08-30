import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import {MatTableModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule
  ],
  declarations: [EmployeesComponent],
  exports: [EmployeesComponent]
})
export class EmployeesModule { }

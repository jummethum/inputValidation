import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import {MatDividerModule, MatTableModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatDividerModule
  ],
  declarations: [EmployeesComponent],
  exports: [EmployeesComponent]
})
export class EmployeesModule { }

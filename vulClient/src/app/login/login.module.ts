import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatGridListModule, MatIconModule, MatInputModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EmployeesModule} from './employees/employees.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    EmployeesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

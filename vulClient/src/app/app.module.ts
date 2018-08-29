import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EmployeesModule} from './employees/employees.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BackendService} from './backend.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    EmployeesModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

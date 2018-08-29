import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = '';

  password = '';

  showError = false;

  constructor(private backendService: BackendService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    const isSuccess = this.backendService.login(this.username, this.password);
    if(isSuccess) {
        this.router.navigate(['/employees']);
    }
    else {
      this.showError = true;
    }
  }
}

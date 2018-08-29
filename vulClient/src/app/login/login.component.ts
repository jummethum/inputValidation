import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  showError = false;

  constructor(private formBuilder: FormBuilder, private backendService: BackendService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    const isSuccess = this.backendService.login(this.f.username.value, this.f.password.value).subscribe((token) => {
        this.backendService.token = token;
        console.log(token);
    });
    if(isSuccess) {
        this.router.navigate(['/employees']);
    }
    else {
      this.showError = true;
    }
  }
}

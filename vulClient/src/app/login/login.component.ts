import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
    this.backendService.login(this.f.username.value, this.f.password.value).subscribe((response) => {
        localStorage.setItem('currentUser', JSON.stringify({ token: response.token, name: 'currentUser' }));
        this.router.navigate(['/employees']);
    }, error => {
        this.showError = true;
      });
  }
}

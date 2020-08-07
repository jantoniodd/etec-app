import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formaLogin: FormGroup;

  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ) {
    if (_authService.currentUserValue) {
      this._router.navigate(['/']);
    }
  }

  get f() {
    return this.formaLogin.controls;
  }

  ngOnInit(): void {
    this.formaLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.formaLogin.invalid) {
      return;
    }

    this.loading = true;

    this._authService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (resp) => {
          this._router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
  }
}

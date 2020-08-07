import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { User } from 'src/app/_models';

@Component({ selector: 'etec-header', templateUrl: './header.component.html' })
export class HeaderComponent implements OnInit {
  
  user: User;

  constructor(private _router: Router, private _authService: AuthService) {
    _authService.currentUser.subscribe((value) => (this.user = value));
  }

  ngOnInit(): void {}

  logout() {
    this._authService.logout();
    this._router.navigate(['/login']);
  }
}

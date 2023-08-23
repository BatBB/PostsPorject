import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public readonly isLogin = this.authService.isLoggedIn;

  public readonly userName = this.authService.userName;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public onLogin = () => {
    this.router.navigate(['login']);
  };

  public onLogout = () => {
    this.authService.logout();
    this.router.navigate(['login']);
  };
}

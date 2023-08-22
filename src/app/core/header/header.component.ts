import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isLogin = this.authService.isLoggedIn;

  constructor(private authService: AuthService) {}

  public onLogin = () => {
    this.authService.login();
  };

  public onLogout = () => {
    this.authService.logout();
  };
}

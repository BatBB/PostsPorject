import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isLogin = false;

  public onLogin = () => {
    this.isLogin = true;
  };

  public onLogout = () => {
    this.isLogin = false;
  };
}

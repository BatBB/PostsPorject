import { Injectable, WritableSignal, signal } from '@angular/core';
import { LoginData } from 'src/app/models/login-form.model';

const token = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInPrivate = signal(!!localStorage.getItem(token));

  public isLoggedIn = this.isLoggedInPrivate.asReadonly();

  private userNamePrivate: WritableSignal<string | null> = signal(
    localStorage.getItem(token) ?? null
  );

  public userName = this.userNamePrivate.asReadonly();

  public login = (loginData: LoginData) => {
    localStorage.setItem(token, loginData.login);
    this.isLoggedInPrivate.set(true);
    this.userNamePrivate.set(loginData.login);
  };

  public logout = () => {
    localStorage.removeItem(token);
    this.isLoggedInPrivate.set(false);
    this.userNamePrivate.set(null);
  };
}

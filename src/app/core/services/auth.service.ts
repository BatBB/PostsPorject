import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInPrivate = signal(false);

  public isLoggedIn = this.isLoggedInPrivate.asReadonly();

  public login = () => {
    this.isLoggedInPrivate.set(true);
  };

  public logout = () => {
    this.isLoggedInPrivate.set(false);
  };
}

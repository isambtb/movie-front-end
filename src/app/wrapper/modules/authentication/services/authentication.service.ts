import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieHelper } from 'src/app/wrapper/helpers/cookie.helper';
import { JwtHelperService } from '@auth0/angular-jwt';

interface IUser {
  id: number;
  username: string;
  accessToken: string;
}

@Injectable()
export class AuthenticationService {
  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService,
  ) { }

  public login(body: {username: string; password: string}): Observable<IUser> {
    return this.httpClient.post<IUser>(``, body, {});
  }

  public register(body: {username: string; password: string}): Observable<{ message: string }> {
    return this.httpClient.post<{ message: string }>(``, body, {});
  }

  public isAuthenticated(): boolean {
    const token = CookieHelper.getCookie('AUTH_USER_TOKEN');
    if (!token) return false;
    return !this.jwtHelper.isTokenExpired(token);
  }
}

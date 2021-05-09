import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IFilm } from '../models/film.model';
import { CookieHelper } from 'src/app/wrapper/helpers/cookie.helper';

interface IGetAll {
  page: number;
  size: number;
  sort: string;
}

interface IRate {
  id: number;
  comment: string;
  rating: number;
}

@Injectable()
export class FilmApiService {
  constructor(private httpClient: HttpClient) { }

  public getFilms(body: IGetAll): Observable<IFilm[]> {
    const token = CookieHelper.getCookie('AUTH_USER_TOKEN');
    const headers = { Authorization: `Bearer ${token}` };
    return this.httpClient.post<IFilm[]>(``, body, { headers });
  }

  public rateFilm(body: IRate): Observable<IFilm> {
    const token = CookieHelper.getCookie('AUTH_USER_TOKEN');
    const headers = { Authorization: `Bearer ${token}` };
    return this.httpClient.post<IFilm>(``, body, { headers });
  }
}

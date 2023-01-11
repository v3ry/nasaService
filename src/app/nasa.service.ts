import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Nasa } from './nasa.interface';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  constructor(private http: HttpClient) {}
  param_img = '';
  // public imgOfTheDay = '';
  configUrl =
    'https://api.nasa.gov/planetary/apod?api_key=J2FOyKVHPg3BwiOXwNeqglGosWgQrew5PRV9TJi4';

  getImageOfTheDay2(): Observable<Nasa> {
    return this.http.get<Nasa>(this.configUrl);
  }
  getImageOfTheDay(): Observable<string> {
    return this.http
      .get<{ url: string }>(this.configUrl)
      .pipe(map((res) => res.url));
  }
  // getImageOfTheDay(): Observable<string> {
  //   return this.http.get(this.configUrl).pipe(map((res) => res as any));
  // }
}

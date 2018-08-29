import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable(
)
export class BackendService {

  private url = 'http://localhost:8080/myapp/rest';

  public token = '';

  constructor(private http: HttpClient) { }

  login(username, password): Observable<any> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post(`${this.url}/authentication`, body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable(
)
export class BackendService {

  private url = 'http://localhost:8080/myapp/rest';

  token = '';

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

  getEmployees(): Observable<any> {
    return this.http.get(`${this.url}/vul/employees`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.token}`)
    });
  }

  searchEmployee(term: string): Observable<any> {
    return this.http.get(`${this.url}/vul/search?searchString=${term}`, { responseType: 'text',
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.token}`)
    });
  }
}

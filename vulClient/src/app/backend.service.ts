import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  login(username, password) {
      return true;
  }
}

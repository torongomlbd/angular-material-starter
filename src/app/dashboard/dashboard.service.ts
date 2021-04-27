import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  getUserList(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getPhotos(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos`);
  }

  getPhoto(id): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
  }
}

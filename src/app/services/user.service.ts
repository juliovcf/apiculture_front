import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../config/apiConfig';
import { Role } from '../models/role.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${API_BASE_URL}/users`;
  }

  get(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

  update(id: number, user: User): Observable<any> {
    const userUrl = `${this.url}/${id}`;
    return this.http.put<any>(userUrl, user);
  }

  delete(id: number): Observable<any> {
    const userUrl = `${this.url}/${id}`;
    return this.http.delete<any>(userUrl);
  }

  getByRole(role: Role): Observable<User[]> {
    const roleUrl = `${this.url}/role`;
    return this.http.put<User[]>(roleUrl, role);
  }

}

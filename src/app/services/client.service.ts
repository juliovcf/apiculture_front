import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../config/apiConfig';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${API_BASE_URL}/clients`;
  }

  get(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url);
  }

  getById(id: number): Observable<Client> {
    const clientUrl = `${this.url}/${id}`;
    return this.http.get<Client>(clientUrl);
  }

  create(client: Client): Observable<any> {
    return this.http.post<any>(this.url, client);
  }

  update(id: number, client: Client): Observable<any> {
    const clientUrl = `${this.url}/${id}`;
    return this.http.put<any>(clientUrl, client);
  }

  delete(id: number): Observable<any> {
    const clientUrl = `${this.url}/${id}`;
    return this.http.delete<any>(clientUrl);
  }
}

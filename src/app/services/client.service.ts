import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../config/apiConfig';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${API_BASE_URL}/clients`;
  }

  get() {
    return this.http.get(this.url);
  }

  create(client: any) {
    return this.http.post(this.url, client);
  }

  update(id: number, client: any) {
    return this.http.put(`${this.url}${id}`, client);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}${id}`);
  }
}

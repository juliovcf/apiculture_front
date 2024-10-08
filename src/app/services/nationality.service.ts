import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../config/apiConfig';
import { ResponseObject } from '../models/responseObject.model';

@Injectable({
  providedIn: 'root'
})
export class NationalityService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${API_BASE_URL}/nationalities`;
  }

  get(): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(this.url);
  }

  getById(id: number): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(`${this.url}/${id}`);
  }
}

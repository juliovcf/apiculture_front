import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericDetail } from '../models/generic.model';

@Injectable({ providedIn: 'root' })
export class DetailService {

  private apiUrl = 'https://tu-api.com/api';

  constructor(private http: HttpClient) { }

  getDetailsById(id: string, type: string): Observable<GenericDetail> {
    const url = `${this.apiUrl}/${type}/${id}`;
    return this.http.get<GenericDetail>(url);
  }
}

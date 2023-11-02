import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../config/apiConfig';
import { ResponseObject } from '../models/responseObject.model';
import { Transaction } from '../models/transaction.model'; // Asegúrate de tener este modelo

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${API_BASE_URL}/transactions`;
  }

  get(): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(this.url);
  }

  getById(id: number): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(`${this.url}/${id}`);
  }

  create(transaction: Transaction): Observable<ResponseObject> {
    return this.http.post<ResponseObject>(this.url, transaction);
  }

  update(id: number, transaction: Transaction): Observable<ResponseObject> {
    return this.http.put<ResponseObject>(`${this.url}/${id}`, transaction);
  }

  delete(id: number): Observable<ResponseObject> {
    return this.http.delete<ResponseObject>(`${this.url}/${id}`);
  }

}

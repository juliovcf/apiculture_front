import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { API_BASE_URL } from '../config/apiConfig';
import { Client } from '../models/client.model';
import { ResponseObject } from '../models/responseObject.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private refreshNeeded$ = new BehaviorSubject<void>(undefined);
  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${API_BASE_URL}/clients`;
  }

  get(): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(this.url);
  }

  getById(id: number): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(`${this.url}/${id}`);
  }

  create(client: Client): Observable<ResponseObject> {
    return this.http.post<ResponseObject>(this.url, client).pipe(
      tap(() => {
        this.refreshNeeded$.next();
      })
    );
  }

  update(id: number, client: Client): Observable<ResponseObject> {
    return this.http.put<ResponseObject>(`${this.url}/${id}`, client);
  }

  delete(id: number): Observable<ResponseObject> {
    return this.http.delete<ResponseObject>(`${this.url}/${id}`);
  }

  get refreshNeeded() {
    return this.refreshNeeded$;
  }

}

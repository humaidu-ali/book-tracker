import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendService } from './BackendService';
import {Book} from '../model/Book';

@Injectable({
  providedIn: 'root',
})
export class DataService extends  BackendService{
  constructor(private http: HttpClient) {
    super();
  }

  getAllBooks():Observable<Book[]>{
    return this.http.get<any>(`${this.baseURL}/api/books`);
  }
}

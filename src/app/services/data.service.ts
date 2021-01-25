import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendService } from './BackendService';
import {Book} from '../model/Book';
import { Reader } from '../model/Reader';

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

  getAllReaders():Observable<Reader[]>{
    return this.http.get<any>(`${this.baseURL}/api/readers`);
  }

  addBook(book:Book):Observable<Book>{
    return this.http.post<Book>(`${this.baseURL}/api/books/add`,book);
  }

  updateBook(updatedBook:Book):Observable<any>{
    return this.http.put<any>(`${this.baseURL}/api/books/update/${updatedBook.id}`,updatedBook);
  }

  deleteBook(id:number):Observable<any>{
    return this.http.delete<any>(`${this.baseURL}/api/books/delete/${id}`);
  }
}

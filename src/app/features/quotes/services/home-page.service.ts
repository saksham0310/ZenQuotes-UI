import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from '../models/quote.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  apiUrl:String="http://localhost:8080/v1/quote/";

  constructor(private http:HttpClient) { }
  
  getAllQuotes(): Observable<Quote[]>{
    return this.http.get<Quote[]>(`${this.apiUrl}all`);
  }
}

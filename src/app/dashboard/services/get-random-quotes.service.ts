import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RandomQuote } from '../models/random-quotes.model';

@Injectable({
  providedIn: 'root'
})
export class GetRandomQuotesService {

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<RandomQuote[]> {
    return this.http.get<RandomQuote[]>('/api/random');
  }
}

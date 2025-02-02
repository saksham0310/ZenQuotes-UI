import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  apiUrl:String="http://localhost:8080/v1/auth/";

  signup(user:User):Observable<any> {
    return this.http.post(`${this.apiUrl}sign-up`,user);
  }
 
  login(user: User):Observable<string>
  {
    return this.http.post(`${this.apiUrl}login`,user,{
      responseType:'text',
    });
  }
}

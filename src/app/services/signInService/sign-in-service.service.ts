import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignIn } from 'src/app/sign-in/sign-in';

@Injectable({
  providedIn: 'root'
})
export class SignInServiceService {
  private signInUrl = "https://localhost:7022/api/SignIn"
  constructor(private http: HttpClient) { }

   getClaims(_signIn: SignIn):Observable<any>{
    return this.http.post<any>(this.signInUrl, _signIn)}
    
}

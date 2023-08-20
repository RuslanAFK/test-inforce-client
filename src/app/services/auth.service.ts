import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LoginInterface from '../interfaces/login.interface';
import RegisterInterface from '../interfaces/register.interface';
import AuthResponseInterface from '../interfaces/auth-response.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  link = "https://localhost:7178/api/Auth/";

  register(register: RegisterInterface){
    return this.http.post<void>(this.link + "Register", register);
  }

  login(login: LoginInterface) {
    return this.http.post<AuthResponseInterface>(this.link + "Login", login);
  }
}

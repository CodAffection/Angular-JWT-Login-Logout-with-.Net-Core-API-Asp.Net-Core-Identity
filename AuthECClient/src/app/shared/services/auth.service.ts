import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  baseURL = 'http://localhost:5007/api';

  createUser(formData:any){
    return this.http.post(this.baseURL+'/signup',formData);
  }

  signin(formData:any){
    return this.http.post(this.baseURL+'/signin',formData);
  }
  
}

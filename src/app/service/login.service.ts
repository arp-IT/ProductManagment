import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public httpOptions : any;
  public baseURL ="http://localhost:3000/api/users/login";
  constructor(private _http : HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json; charset=utf-8'})
    }
  }

  public login (loginInfo :any){
    console.log("hello");
    return this._http.post(this.baseURL,loginInfo, this.httpOptions);
  }
  

}

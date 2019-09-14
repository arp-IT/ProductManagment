import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public httpOptions : any;
  public baseURL ="http://localhost:3000/api/products";
  constructor(private _http : HttpClient) { 
    //alert(localStorage.getItem('accessToken'));
    this.httpOptions = {
      headers: new HttpHeaders(
        { 'x-access-token': localStorage.getItem('accessToken')})
    }
  }

  public productList(){
    return this._http.get(this.baseURL, this.httpOptions);
  }

  public productAdd(product){
    return this._http.post(this.baseURL,product, this.httpOptions);
  }

  public productDelete(productId){
    return this._http.delete(this.baseURL+"/"+productId, this.httpOptions);
  }

  public productUpdate(product,productId){
    return this._http.put(this.baseURL+"/"+productId,product,this.httpOptions);
  }
  

}

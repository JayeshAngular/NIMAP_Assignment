import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpSVCService {


  baseURL:string = "http://localhost:3000/";

   httpHeader:HttpHeaders = new HttpHeaders({
    "content-type": "application/json"
   })
  constructor(private http:HttpClient) { }


  postDataFromServer(endPoint:string, obj:any) {
    const url = this.baseURL + endPoint;
   return this.http.post(url, obj,{headers:this.httpHeader});
   }

   getDataFromServer(endPoint:String) {
    const url = this.baseURL + endPoint;
    return this.http.get(url,{headers:this.httpHeader});
   }
}

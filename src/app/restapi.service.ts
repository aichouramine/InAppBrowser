import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpHeaders, HttpParams} from '@angular/common/http';

 

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  reqOpts:any = {
    headers:
      {
      'Accept':'application/json',

    },
    
  }
  

  constructor(private http:Http) {

  }

  login(data) {
      var url = 'http://192.168.2.32/api/method/login?'+ data;
      var response = this.http.get(url,this.reqOpts).map(res => res.json());
      return response;
  } 
}

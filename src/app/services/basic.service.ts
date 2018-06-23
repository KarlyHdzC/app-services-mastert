import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class BasicService {

  constructor(private http: HttpClient) {
  }

  getData(params:any): Observable<any>{
    return this.http.get(environment.api+params)
  }

  postData(data:any,params:any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json')
    return this.http.post(environment.api+params,data,{headers:headers})
  }

  putData(data:any,params:any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json')
    return this.http.put(environment.api+params,data,{headers:headers})
  }

  deleteData(params:any): Observable<any>{
    return this.http.delete(environment.api+params)
  }
}

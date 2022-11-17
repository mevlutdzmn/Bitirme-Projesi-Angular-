import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Request } from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  apiUrl="https://localhost:44326/api/"
  constructor(private httpClient:HttpClient) { }

  getRequests():Observable<ListResponseModel<Request>>{
    let newPath=this.apiUrl+"requests/getall"
    return this.httpClient.get<ListResponseModel<Request>>(newPath);

  }
  getRequestsByCategory(categoryId:number):Observable<ListResponseModel<Request>>{
    let newPath=this.apiUrl+"requests/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Request>>(newPath);

  }
}

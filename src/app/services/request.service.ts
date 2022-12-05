import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Request } from '../models/request';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

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
  add(request:Request):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"requests/add",request)
  }
  updateRequest(request:Request):Observable<ResponseModel> {
    let newPath = this.apiUrl + "requests/update";
    return this.httpClient.put<ResponseModel>(newPath, request);
  }
  
  delete(requestId:number):Observable<ResponseModel>{
    let newPath=this.apiUrl+"requests/delete?requestid="+requestId
    return this.httpClient.delete<ResponseModel>(newPath);
  }
  getByRequestId(requestId:number):Observable<SingleResponseModel<Request>>{
    let newPath= this.apiUrl+"requests/getbyid?id="+requestId
    return this.httpClient.get<SingleResponseModel<Request>>(newPath);
  }
}

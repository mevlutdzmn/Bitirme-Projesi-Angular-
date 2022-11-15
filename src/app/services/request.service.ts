import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RequestResponseModel } from '../models/requestResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  apiUrl="https://localhost:44326/api/requests/getall"
  constructor(private httpClient:HttpClient) { }

  getRequests():Observable<RequestResponseModel>{
    return this.httpClient.get<RequestResponseModel>(this.apiUrl);

  }
}

import { HttpClient } from '@angular/common/http';
import { ResponseModel } from './../models/responseModel';
import { RequestImage } from './../models/request-image';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RequestDetail } from '../models/request-detail';

@Injectable({
  providedIn: 'root'
})
export class RequestImageService {

  apiUrl="https://localhost:44326/api/";

  constructor(private httpClient:HttpClient) { }

  getImagesByrequestId(requestId:number):Observable<ListResponseModel<RequestImage>>{
    let newPath= this.apiUrl+"requestImages/getimagesbyrequestid?requestid="+requestId
    return this.httpClient.get<ListResponseModel<RequestImage>>(newPath);
  }

  add(requestId: string, file:any){
    let newPath = this.apiUrl + "requestimages/add"
    let formData = new FormData();
    formData.append("file", file);
    formData.append("RequestId", requestId);
    formData.append("ImagePath", "wwwroot/Uploads/Images");
    return this.httpClient.post(newPath,formData)
  }

  update(requestId: string, file:any){
    let newPath = this.apiUrl + "requestimages/update"
    let formData = new FormData();
    formData.append("file", file);
    formData.append("RequestId", requestId);
    formData.append("ImagePath", "wwwroot/Uploads/Images");
    return this.httpClient.put(newPath,formData)
  }
  delete(imageId: number): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'requestimages/delete',imageId
    );
  }
}
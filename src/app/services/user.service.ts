import { HttpClient } from '@angular/common/http';
import { UserChangePassword } from './../models/userchangePassword';
import { UserDetailModel } from './../models/user-details';
import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { Observable } from 'rxjs';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { UserCreate } from '../models/userCreate';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://localhost:44326/api/";

  constructor( private httpClient:HttpClient) { }

 getUsers():Observable<ListResponseModel<User>>{
    let newPath= this.apiUrl+"user/getall"
     return this.httpClient.get<ListResponseModel<User>>(newPath);
 }
 getByUserId(Id:number):Observable<SingleResponseModel<User>>{
   let newPath= this.apiUrl+"user/getbyid?id="+Id
   return this.httpClient.get<SingleResponseModel<User>>(newPath);
 }

 getUserDetailById(Id:number):Observable<SingleResponseModel<UserDetailModel>>{
   let newPath= this.apiUrl+"user/getbyid?id="+Id
   return this.httpClient.get<SingleResponseModel<UserDetailModel>>(newPath);
 }

 addUser(user:UserCreate): Observable<SingleResponseModel<string>>{
   return this.httpClient.post<SingleResponseModel<string>>(this.apiUrl+"user/add",user)
 }

updateUser(user:User):Observable<ResponseModel> {
  let newPath = this.apiUrl + "user/update"
  return this.httpClient.put<ResponseModel>(newPath, user);
} 

deleteUser(Id:number):Observable<ResponseModel>{
  let newPath=this.apiUrl+"user/delete?id="+Id
  return this.httpClient.delete<ResponseModel>(newPath);
}

changePassword(userChangePassword:UserChangePassword):Observable<ResponseModel>{
  let newPath = this.apiUrl +"user/changeuserpassword"
  return this.httpClient.post<ResponseModel>(newPath,userChangePassword);
}
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/register';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   fullName: string;
   role:string;
   identifier:string;

  apiUrl = 'https://localhost:44326/api/auth/';
  constructor(
    private httpClient:HttpClient,
    private jwtHelperService:JwtHelperService
      
    ) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }
  register(registerModel: RegisterModel): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "register", registerModel)
  }

  isAuthenticated(){
    //eğer local storage da token varsa true dondür yoksa false döndür
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
   decodeToken() {
     let token = JSON.parse(localStorage.getItem('token') || '{}'); 
    
     let decodedToken = this.jwtHelperService.decodeToken(token);

     let name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
     this.fullName = name.split(' ')[0] + " " + name.split(' ')[1];
   }
   roleToken(){
    let token = JSON.parse(localStorage.getItem('token') || '{}'); 
     let roleToken= this.jwtHelperService.decodeToken(token);
     let role= roleToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
     this.role=role;
   }
 
   nameidentifier(){
    let token = JSON.parse(localStorage.getItem('token') || '{}'); 
     let IdToken= this.jwtHelperService.decodeToken(token);
     let identifier = IdToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
     this.identifier=identifier;
   }
   

}

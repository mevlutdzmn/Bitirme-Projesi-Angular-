import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request';
import {HttpClient} from '@angular/common/http'
import { RequestResponseModel } from 'src/app/models/requestResponseModel';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requests:Request[] = [];
  apiUrl="https://localhost:44326/api/requests/getall"
  
  constructor(private httpClient:HttpClient) {  }

  ngOnInit(): void { 
    this.getRequests()
    
  }
  getRequests(): void{
    this.httpClient.get<RequestResponseModel>(this.apiUrl).subscribe(response=>{
      this.requests=response.data
   
  });
  
  }


}

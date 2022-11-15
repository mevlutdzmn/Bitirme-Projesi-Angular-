import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request';

import { RequestResponseModel } from 'src/app/models/requestResponseModel';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requests:Request[] = [];
  dataLoadded=false;
 
  
  constructor(private requestService:RequestService) {  }

  ngOnInit(): void { 
    this.getRequests()
    
  }
  getRequests(): void{
    this.requestService.getRequests().subscribe(response=>{
      this.requests=response.data
      this.dataLoadded=true;
    });
  }


}

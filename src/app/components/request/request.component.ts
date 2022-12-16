import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/models/request';
import { RequestService } from 'src/app/services/request.service';
import { ToastrService } from 'ngx-toastr';
import { RequestImageService } from 'src/app/services/request-image.service';
import { RequestDetail } from 'src/app/models/request-detail';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requestDetail: RequestDetail;
  requestDetails: RequestDetail[] = [];

  requests: Request[] = [];
  dataLoadded = false;
  filterText = "";


  constructor(private requestService: RequestService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private requestImageService: RequestImageService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getRequestsByCategory(params["categoryId"])
      } else {
        this.getRequests();
      }
    })

  }
  getRequests(): void {
    this.requestService.getRequests().subscribe(response => {
      this.requests = response.data;
      this.getRequestImages();
      this.dataLoadded = true;
    });
  }
  getRequestsByCategory(categoryId: number): void {
    this.requestService.getRequestsByCategory(categoryId).subscribe(response => {
      this.requests = response.data;
      this.getRequestImages();
      this.dataLoadded = true;
    });
  }
  getRequestImages() {
    
    this.requests.forEach((request) => {
      
      this.requestImageService.getImagesByrequestId(request.requestId).subscribe((response) => {
        
          request.images = response.data.map((image) => image.imagePath);
         
        });//bakacam bir dk 

        
    });
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }


}

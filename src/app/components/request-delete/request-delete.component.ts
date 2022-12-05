import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/models/request';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/services/request.service';


@Component({
  selector: 'app-request-delete',
  templateUrl: './request-delete.component.html',
  styleUrls: ['./request-delete.component.css']
})
export class RequestDeleteComponent implements OnInit {
  request:Request
  requestId:number
  dataLoaded=false

  constructor(
    private requestService:RequestService,
    private toastrService:ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if ((this.requestId = params['requestId'])) {
        this.getByRequestId(this.requestId);
      }
    });
  }
  
  getByRequestId(requestId:number){
    this.requestService.getByRequestId(requestId).subscribe((response) => {
      this.request = response.data;
      this.dataLoaded = true;
    });
  }
  closeRequestDeleteModal() {
    this.router.navigate(['']);
  }

  delete() {
    this.requestService.delete(this.request.requestId).subscribe(
      (response)=>{
        this.toastrService.success(
          this.request.reasonRequest,
          response.message
        );
        this.closeRequestDeleteModal();
      },
      (responseError) => {
        this.toastrService.error(
          responseError.error.message,
          'Silme Başarısız'
        );
      }
    );
  }
}

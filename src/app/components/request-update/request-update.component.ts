import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/services/request.service';

import { Request } from 'src/app/models/request';

@Component({
  selector: 'app-request-update',
  templateUrl: './request-update.component.html',
  styleUrls: ['./request-update.component.css']
})
export class RequestUpdateComponent implements OnInit {
  requestId:number
  request:Request
  requestUpdateForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private requestService: RequestService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router:Router) {

  }

  ngOnInit(): void {
  this.createRequestUpdateForm()

  this.activatedRoute.params.subscribe((params) => {
    if (params['requestId']) {
      this.requestId=params['requestId']
      this.getByRequestId(params['requestId']);
    }
  });
  }
  createRequestUpdateForm() {
    this.requestUpdateForm = this.formBuilder.group({
      requestId:["",Validators.required],
      categoryId: ["", Validators.required],
      wallet: ["", Validators.required],
      reasonRequest: ["", Validators.required],
      collectedAid:["",Validators.required]

    })

}
updateRequest() {
  if (this.requestUpdateForm.valid) {
    let requestModel = Object.assign({}, this.requestUpdateForm.value);
    console.log(requestModel);

    this.requestService.updateRequest(requestModel).subscribe((response) => {
      this.toastrService.success(response.message, "Success");

    });
  }
  else{
      this.toastrService.error("Please fill in all fields on the form","Error");
  }
}
getByRequestId(requestId:number)
{
  this.requestService.getByRequestId(requestId).subscribe((response) =>{
    this.request = response.data;

    this.requestUpdateForm.setValue({
      ...this.request
    });

  });
}

}

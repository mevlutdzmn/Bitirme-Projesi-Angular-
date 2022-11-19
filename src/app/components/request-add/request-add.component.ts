import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-add',
  templateUrl: './request-add.component.html',
  styleUrls: ['./request-add.component.css']
})
export class RequestAddComponent implements OnInit {

  requestAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private requestService: RequestService,
    private toastrService: ToastrService) {
    this.createRequestAddForm();
  }

  ngOnInit(): void {
  }

  //form oluşturmak için yazıldı
  createRequestAddForm() {
    this.requestAddForm = this.formBuilder.group({

      categoryId: ["", Validators.required],
      wallet: ["", Validators.required],
      reasonRequest: ["", Validators.required]

    })
  }
  add() {
    //eğer requestaddform geçerli ise o zaman yap altaki hareketleri 
    if (this.requestAddForm.valid) {
      //request model içi bir sınıf oluştur,ve bütün alanları al içine ekle
      let requestModel = Object.assign({}, this.requestAddForm.value)
      this.requestService.add(requestModel).subscribe(response => {

        this.toastrService.success(response.message, "Başarılı")
      }, responseError => {
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
        } 
      })

    } else {
      this.toastrService.error("formunuz eksik","dikkat")
    }

  }

}

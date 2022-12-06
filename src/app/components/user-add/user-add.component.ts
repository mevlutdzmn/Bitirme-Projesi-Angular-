import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
userAddForm:FormGroup;

  constructor(
    private userService:UserService,
    private router:Router,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService

  ) { }

  ngOnInit(): void {
    this.createUserAddForm();
  }
  createUserAddForm(){
    this.userAddForm=this.formBuilder.group({
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required]
    });

    }

     add(){
       if (this.userAddForm.valid) {
         let userModel = Object.assign({}, this.userAddForm.value);
         this.userService.addUser(userModel).subscribe(
           (response) => {
             this.toastrService.success(response.message, 'Başarılı');
           },
           (responseError) => {
             if (responseError.error.Errors.length > 0) {
               for (let i = 0; i < responseError.error.Errors.length; i++) {
                 this.toastrService.error(
                   responseError.error.Errors[i].ErrorMessage,
                   'Doğrulama Hatası'
                 );
               }
             }
           }
         );
       } else {
         this.toastrService.error('Formunuz eksik', 'Dikkat');
       }
    }
}
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css'],
})
export class UserUpdateComponent implements OnInit {
  Id: number;
  userUpdateForm:FormGroup ;
  user: User;
  dataLoaded: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router:Router

  ) {}

  ngOnInit(): void {
    this.createUserUdateForm();

    this.activatedRoute.params.subscribe((params) => {
      if (params['Id']) {
        this.Id=params['Id']
        this.getUserById(params['Id']);
      }
    });
  }

  createUserUdateForm() {
    this.userUpdateForm = this.formBuilder.group({
      id: [this.Id],
      firstName: [''],
      lastName: [''],
      email: [''],
      passwordHash:[''],
      passwordSalt:[''],
      status:['']
      
    });
  }

  updateUser() {
    if (this.userUpdateForm.valid) {
      let userModel = Object.assign({}, this.userUpdateForm.value);
      console.log(userModel);
      this.userService.updateUser(userModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Success');
      });
    } else {
      this.toastrService.error(
        'Please fill in all fields on the form',
        'Error'
      );
    }
  }
  getUserById(Id: number) {
    this.userService.getByUserId(Id).subscribe((response) => {
      this.user = response.data;
      
      this.userUpdateForm.setValue({
        ...this.user,
      });
      this.dataLoaded = true;
    });
  }
}
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailModel } from './../../models/user-details';
import { UserService } from './../../services/user.service';
import { AuthService } from 'src/app/services/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Id: number;
  userDetail:UserDetailModel;
  dataLoaded = false;

  constructor(
    public authService:AuthService,
    private activatedRoute:ActivatedRoute ,
    private userService:UserService,
    private router:Router

  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.Id = params['Id'];
      this.getByUserDetailId(this.Id);
    });
  }
  // navigateUpdate() {
  //   this.router.navigate([`users/update/${this.Id}`]);
  // }

  
  
   getByUserDetailId(Id: number) {
     this.userService
       .getUserDetailById(Id)
       .subscribe((response) => {
         this.userDetail = response.data;
        console.log(this.userDetail);
  });
  }

}
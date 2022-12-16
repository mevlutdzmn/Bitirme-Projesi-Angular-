import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService:UserService,
  ) { }

  ngOnInit(): void {
    if (this.isAuthenticated()) {
      
      // this.authService.decodeToken();
      // this.authService.roleToken();
      // this.authService.nameidentifier();
    }
  }

  login() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  register() {
    localStorage.removeItem('token');
    this.router.navigate(['register']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
//Admin
  
  userAdd(){
    this.router.navigate(['users/add']);
  }


   userProfile(){
    this.router.navigate([`users/user/${this.authService.identifier}`]);
  }
  userUpdate(){
     this.router.navigate([`users/update/${this.authService.identifier}`]);
   }
   changeUserPassword(){
     this.router.navigate([`users/user/userchangepassword/${this.authService.identifier}`]);
   }
}

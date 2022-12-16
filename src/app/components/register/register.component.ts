import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
 

  constructor(
    private formBuilder:FormBuilder,
    private toastrService: ToastrService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
  this.createRegisterForm();
   
    
  }

  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      let registerModel = Object.assign({}, this.registerForm.value);
      this.authService.register(registerModel).subscribe(
        (response) => {
          this.toastrService.info(response.message);
          localStorage.setItem('token', response.data.token);
          console.log(response.data.token)
          this.toastrService.success(response.message, 'Registered.');
        },
        (responseError) => {
        
          this.toastrService.error(responseError.error);
        }
      );
      this.router.navigate([`/`]);
    } else {
      this.toastrService.error('Form geçersiz.');
    }
  }


  
}
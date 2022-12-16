import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestComponent } from './components/request/request.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { RequestAddComponent } from './components/request-add/request-add.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import {ToastrModule} from "ngx-toastr";
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RequestUpdateComponent } from './components/request-update/request-update.component';
import { RequestDeleteComponent } from './components/request-delete/request-delete.component';
import { UserComponent } from './components/user/user.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserChangepasswordComponent } from './components/user-changepassword/user-changepassword.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestAddImageComponent } from './components/request-add-image/request-add-image.component';




@NgModule({
  declarations: [
    AppComponent,
    RequestComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    RequestAddComponent,
    LoginComponent,
    RequestUpdateComponent,
    RequestDeleteComponent,
    UserComponent,
    UserAddComponent,
    UserDeleteComponent,
    UserUpdateComponent,
    UserChangepasswordComponent,
    RegisterComponent,
    RequestAddImageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({ 
      positionClass:"toast-bottom-right"
    })
  ],//http injectionlarını bütün http isteklerine enjekte etmiş oluyoruz
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

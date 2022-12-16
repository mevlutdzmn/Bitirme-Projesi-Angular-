import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RequestAddComponent } from './components/request-add/request-add.component';
import { RequestDeleteComponent } from './components/request-delete/request-delete.component';
import { RequestUpdateComponent } from './components/request-update/request-update.component';
import { RequestComponent } from './components/request/request.component';
import { UserChangepasswordComponent } from './components/user-changepassword/user-changepassword.component';
import { UserComponent } from './components/user/user.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { LoginGuard } from './guards/login.guard';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestAddImageComponent } from './components/request-add-image/request-add-image.component';

const routes: Routes = [
  {path:"", pathMatch: 'full',component:RequestComponent},
  {path:"requests",component:RequestComponent},
  {path:"requests/category/:categoryId", component:RequestComponent},
  {path:"requests/request/:requestId", component:RequestComponent},
  {path:"requests/add",component:RequestAddComponent,canActivate:[LoginGuard]},
  {path:"requests/update/:requestId",component:RequestUpdateComponent,canActivate:[LoginGuard]},
  {path:"requests/delete/:requestId",component:RequestDeleteComponent},
  {path:"login",component:LoginComponent},
  {path:"users/update/:Id",component:UserUpdateComponent},

   {path:"users/add", component:UserAddComponent},
   {path:"users/add/:Id", component:UserAddComponent},
   {path:"users/user/:Id" , component:UserComponent},
   {path:"users/user/changepassword/:Id" , component:UserChangepasswordComponent},
   {path:"users/delete/:Id", component:UserDeleteComponent},
   {path: "register", component:RegisterComponent },

   {path:"requests/images/:requestId", component:RequestAddImageComponent},
   


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

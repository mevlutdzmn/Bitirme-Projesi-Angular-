import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RequestAddComponent } from './components/request-add/request-add.component';
import { RequestDeleteComponent } from './components/request-delete/request-delete.component';
import { RequestUpdateComponent } from './components/request-update/request-update.component';
import { RequestComponent } from './components/request/request.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", pathMatch: 'full',component:RequestComponent},
  {path:"requests",component:RequestComponent},
  {path:"requests/category/:categoryId", component:RequestComponent},
  {path:"requests/add",component:RequestAddComponent,canActivate:[LoginGuard]},
  {path:"requests/update/:requestId",component:RequestUpdateComponent,canActivate:[LoginGuard]},
  {path:"requests/delete/:requestId",component:RequestDeleteComponent},
  {path:"login",component:LoginComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

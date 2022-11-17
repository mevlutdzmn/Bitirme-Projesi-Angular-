import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestAddComponent } from './components/request-add/request-add.component';
import { RequestComponent } from './components/request/request.component';

const routes: Routes = [
  {path:"", pathMatch: 'full',component:RequestComponent},
  {path:"requests",component:RequestComponent},
  {path:"requests/category/:categoryId", component:RequestComponent},
  {path:"requests/add",component:RequestAddComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

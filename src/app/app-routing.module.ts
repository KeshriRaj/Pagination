import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ChildpageComponent } from './childpage/childpage.component';


const routes: Routes = [
  {
    path:"",
    component:MainpageComponent
  },
  {
    path:"childpage/:id",
    component:ChildpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

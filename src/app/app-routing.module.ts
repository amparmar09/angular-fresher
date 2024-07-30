import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';


const routes: Routes = [

  {
    path: '**',
    redirectTo: 'regForm',
    pathMatch: 'full'
  },
  {
    path: 'regForm',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';


const routes: Routes = [

  {
    path: '**',
    redirectTo: '123',
    pathMatch: 'full'
  },
  {
    path: '123',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

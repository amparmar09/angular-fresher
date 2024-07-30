import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';


const routes: Routes = [

 
  {
    path: 'regForm',
    component: FormComponent
  },
{
  path: 'components',
  loadChildren: () => import ('./components/components.module').then(m=> m.ComponentsModule)
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

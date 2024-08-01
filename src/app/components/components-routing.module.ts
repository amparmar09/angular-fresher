import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../auth.guard';
import { FormComponent } from '../form/form.component';

const routes: Routes = [
    {path: 'about', component : AboutComponent, canActivate: [AuthGuard]},
    {path: 'contact', component : ContactComponent, canActivate: [AuthGuard]},
    {path: 'home', component : HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component : LoginComponent},
    {
      path: 'regForm',
      component: FormComponent
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

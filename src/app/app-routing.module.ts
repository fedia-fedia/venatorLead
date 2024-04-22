import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResetComponent } from './reset/reset.component';

import { StepperDialogComponent } from './stepper-dialog/stepper-dialog.component';


const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"header",component:HeaderComponent
  },
  {
    path:"footer",component:FooterComponent
  },
  {
    path:"aboutus",component:AboutusComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"contactus",component:ContactusComponent
  },
  {
    path:"forgetpass",component:ForgetpassComponent
  },
  {
    path:"firstpage",component:FirstpageComponent
  },
  {
    path:"stepper-dialog",component:StepperDialogComponent
  },
  {
    path:"dashboard",component:DashboardComponent
  },
  {
    path:"sidebar",component:SidebarComponent
  },
  {
    path:"reset/:token",component:ResetComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

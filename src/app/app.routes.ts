import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { Homepage1Component } from './homepage1/homepage1.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
export const routes: Routes = [{path:'test',component:HomepageComponent},{path:'generate_test',component:Homepage1Component},{path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent}
];

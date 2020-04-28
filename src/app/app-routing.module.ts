import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';


const routes: Routes = [

  {path:"",component:MainhomeComponent},
  {path:"home",component:HomeComponent},
  {path:"mainhome",component:MainhomeComponent},
  {path:"aboutme",component:AboutmeComponent},
{path:"contactus",component:ContactusComponent},
{path:"register",component:RegisterComponent},
{path:'moviedetails/:id',component:MoviedetailsComponent},
{path:"**",component:MainhomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { AuthGuard } from './auth.guard';
import { SingUpComponent } from './sing-up/sing-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { MovieDeatilsComponent } from './movie-deatils/movie-deatils.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home', canActivate:[AuthGuard]  ,   component:HomeComponent , },
  {path:'setting',  canActivate:[AuthGuard]  ,  loadChildren:()=>import('./mod-setting/mod-setting.module').then((setMod)=>setMod.ModSettingModule)},
  {path:'moviedetails/:id/:type', canActivate:[AuthGuard]  ,  component:MovieDeatilsComponent},
  {path:'person/:id/:type', canActivate:[AuthGuard]  ,  component:PersonDetailsComponent},
  {path:'login', component:SignInComponent},
  {path:'signup', component:SingUpComponent},
  {path:'',  canActivate:[AuthGuard]  ,component:HomeComponent},
  {path:'**', component:PageNotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

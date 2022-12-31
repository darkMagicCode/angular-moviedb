import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { PrivicyComponent } from './privicy/privicy.component';

const routes: Routes = [
  {path:'setting' ,component:ProfileComponent},
  {path:'password' ,component:PasswordComponent},
  {path:'privacy' ,component:PrivicyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModSettingRoutingModule { }

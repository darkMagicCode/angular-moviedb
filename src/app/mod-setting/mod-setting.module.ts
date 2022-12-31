import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModSettingRoutingModule } from './mod-setting-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { PrivicyComponent } from './privicy/privicy.component';


@NgModule({
  declarations: [
    ProfileComponent,
    PasswordComponent,
    PrivicyComponent
  ],
  imports: [
    CommonModule,
    ModSettingRoutingModule
  ]
})
export class ModSettingModule { }

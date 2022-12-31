import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MovieDeatilsComponent } from './movie-deatils/movie-deatils.component';
import { PersonComponent } from './person/person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PipSeeMorePipe } from './pip-see-more.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchComponent } from './search/search.component';
import {MatButtonModule} from '@angular/material/button';
import { ProfileComponent } from './modSetting/profile/profile.component';
import { ApiIntercInterceptor } from './api-interc.interceptor';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlCurComponent } from './owl-cur/owl-cur.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 

@NgModule({
  declarations: [
    AppComponent,
    SingUpComponent,
    NavbarComponent,
    FooterComponent,
    SignInComponent,
    HomeComponent,
    MediaItemComponent,
    MovieDeatilsComponent,
    PersonComponent,
    PersonDetailsComponent,
    PipSeeMorePipe,
    SearchComponent,
    ProfileComponent,
    OwlCurComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule,MatAutocompleteModule, BrowserAnimationsModule,MatSlideToggleModule,MatButtonModule,CarouselModule,RouterModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiIntercInterceptor,
    multi: true
  }, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

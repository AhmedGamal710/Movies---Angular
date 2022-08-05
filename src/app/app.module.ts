import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { OverviewPipe } from './overview.pipe';
import { ConvertPipe } from './convert.pipe';
import { ProgreesPipe } from './progrees.pipe';
import { SwiperComponent } from './swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { ScrollDirective } from './scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    TvComponent,
    PeopleComponent,
    AboutComponent,
    NavbarComponent,
    DetailsComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    NotfoundComponent,
    SearchComponent,
    OverviewPipe,
    ConvertPipe,
    ProgreesPipe,
    SwiperComponent,
    ScrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

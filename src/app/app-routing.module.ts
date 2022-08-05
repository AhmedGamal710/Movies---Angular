import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard, AuthGuardLogin } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent,title:'Home'},
  {path:'movies/:page',canActivate:[AuthGuard],component:MoviesComponent,title:'Movies'},
  {path:'tv/:page',canActivate:[AuthGuard],component:TvComponent,title:'Tv Show'},
  {path:'person/:page',canActivate:[AuthGuard],component:PeopleComponent,title:'People'},
  {path:'details/:id/:type',canActivate:[AuthGuard],component:DetailsComponent,title:'Details'},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent,title:'About'},
  {path:'search',canActivate:[AuthGuard],component:SearchComponent,title:'Search'},
  {path:'login',canActivate:[AuthGuardLogin],component:LoginComponent,title:'LogIn'},
  {path:'signup',canActivate:[AuthGuardLogin],component:SignupComponent,title:'SignUp'},
  {path:'**',component:NotfoundComponent,title:'NotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

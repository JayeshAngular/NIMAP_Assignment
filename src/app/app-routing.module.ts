import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserRegistrationComponent } from './home-page/user-registration/user-registration.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';

const routes: Routes = [{ path: 'user-profile', loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule) },
{path:'home-page', component:HomePageComponent, children:[
  {path:'user-registration', component:UserRegistrationComponent}
]},
{path:'', redirectTo:'home-page', pathMatch:"full"},
{path:'**', component:InvalidpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

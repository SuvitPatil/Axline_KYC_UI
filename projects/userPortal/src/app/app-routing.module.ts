import { UserPortalComponent } from './user-portal/user-portal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'userPortal', pathMatch: 'full'},
  {
    path: 'userPortal',
    component: UserPortalComponent,
    children: [
      { path: '',
        loadChildren: () => import('./user-portal/user-portal.module').then(mod => mod.UserPortalModule)
      }
    ]
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'newUser', component: RegistrationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }

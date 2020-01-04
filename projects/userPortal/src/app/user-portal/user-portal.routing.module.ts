import { BankRequestComponent } from './shared/pages/bank-request/bank-request.component';
import { EditProfileComponent } from './shared/pages/edit-profile/edit-profile.component';
import { UserPortalComponent } from './user-portal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './shared/pages/user-profile/user-profile.component';
import { UserDocumentsComponent } from './shared/pages/user-documents/user-documents.component';
import { UploadDocumentsComponent } from './shared/pages/upload-documents/upload-documents.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
{ path: '',
  component: UserPortalComponent,
  canActivate: [AuthGuard],
  children: [
    { path: 'user', component: UserProfileComponent},
    { path: 'editProfile', component: EditProfileComponent},
    { path: 'request', component: BankRequestComponent},
    { path: 'documents', component: UserDocumentsComponent},
    { path: 'uploadDocument', component: UploadDocumentsComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPortalRoutingModule { }

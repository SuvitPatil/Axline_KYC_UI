import { HttpClientModule } from '@angular/common/http';
import { UploadDocumentsComponent } from './shared/pages/upload-documents/upload-documents.component';
import { UserDocumentsComponent } from './shared/pages/user-documents/user-documents.component';
import { BankRequestComponent } from './shared/pages/bank-request/bank-request.component';
import { UserProfileComponent } from './shared/pages/user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPortalComponent } from './user-portal.component';
import { UserPortalRoutingModule } from './user-portal.routing.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EditProfileComponent } from './shared/pages/edit-profile/edit-profile.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import {
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatDividerModule,
  MatSelectModule,
  MatDatepickerModule
} from '@angular/material';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    UserPortalComponent,
    SidebarComponent,
    NavbarComponent,
    UserProfileComponent,
    EditProfileComponent,
    BankRequestComponent,
    UserDocumentsComponent,
    UploadDocumentsComponent
  ],
  imports: [
    CommonModule,
    UserPortalRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ]
})
export class UserPortalModule {}

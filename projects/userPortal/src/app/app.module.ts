import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import {
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatSelectModule
} from '@angular/material';

import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';
import { UserPortalModule } from './user-portal/user-portal.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistrationComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    ModalModule.forRoot(),
    FlexLayoutModule,
    NgbModule,
    HttpClientModule,
    UserPortalModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule {}

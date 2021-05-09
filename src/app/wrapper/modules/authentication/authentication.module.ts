import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthenticationService } from './services/authentication.service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyMaterialModule,
    BrowserAnimationsModule,
    AuthenticationRoutingModule,
    MatCardModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    BrowserAnimationsModule,
    MatCardModule,
    SignInComponent,
  ],
  providers:  [
    AuthenticationService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
]
})
export class AuthenticationModule { }

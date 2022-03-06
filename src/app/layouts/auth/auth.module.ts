import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from 'src/app/modules/signin/signin.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

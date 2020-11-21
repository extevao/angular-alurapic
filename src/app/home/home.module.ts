import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from "@angular/router";

import { SignInComponent } from "./signin/signing.component";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { SignUpComponent } from "./signup/signup.component";


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule
  ]
})
export class HomeModule {}

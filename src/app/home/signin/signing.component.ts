import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "src/app/core/auth/auth.service";

@Component({
  templateUrl: './signing.component.html'
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log('vai se autenticar')

    const userName = this.loginForm.get('userName').value
    const password = this.loginForm.get('password').value

    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => {
          console.log('AUTENTICADO')
          this.router.navigate([ 'user', userName ])
        }, err => {
          console.log(err)

          this.loginForm.reset()
        })
  }
}

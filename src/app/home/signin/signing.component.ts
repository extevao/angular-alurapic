import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: './signing.component.html'
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){ }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}

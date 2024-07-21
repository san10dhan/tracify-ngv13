import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(7)]]
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }
  onSubmit(): void {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
    }
  }
}

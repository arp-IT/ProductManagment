import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage:string;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService,private router: Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          username: ['', [Validators.required]],
          password: ['', [Validators.required]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.loginService.login(this.registerForm.value)
      .subscribe(data => {
          //this.user.setUserLoggedIn(true);
          localStorage.setItem('isuserLoggedIn', "Y");
          localStorage.setItem('accessToken', data['id']);
          this.router.navigate(['/Products']);
      },
      error =>{
        if(error.status  ==  401)
          this.errorMessage = "Please enter valid credentials";
         else
          this.errorMessage = error.message;
          localStorage.setItem('isuserLoggedIn', "N");
      });
  }

}

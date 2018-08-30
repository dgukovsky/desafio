import { Component, OnInit } from '@angular/core';
import {AbstractControl,FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public form: FormGroup;
    public message: string;
    public username: AbstractControl;
    public password: AbstractControl;
    public submitted = false;
    public loading = false;
    public user: any;
    public success: boolean;
  constructor(
    fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
   }

  ngOnInit() {
  }

  onSubmit(values): void {
    this.submitted = true;
    console.log(values);

      this.loading = true;
      this.auth.login(values.username, values.password)
        .subscribe(
          user => {
            this.form.reset();
            this.loading = false;

            this.router.navigate(['/plan-cuentas']);

          },
          error => {
            this.success = false;
            this.loading = false;
            this.message = 'Usuario o password incorrectos';
            this.form.reset();
          }
        );
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthUser } from 'src/app/entity/AuthUser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  auth: AuthUser = { username: '', password: '' };
  errorMessage : string = '';
  constructor(private authService: AuthService, private router: Router,private http: HttpClient){
  }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (form.valid) {
      this.authService.login(this.auth).subscribe({
        next: response => {
        console.log('Inicio exitoso',this.auth,response);
        this.router.navigate(['/']);
      },
      error: error => {
        this.errorMessage = 'Credenciales invalidas',error;
      }});
    }
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  title: string = 'Laguna';
  

 logout(){
  this.authService.logout();
 }

  constructor(private authService: AuthService, private cookieService: CookieService, private router: Router){
    
  }

  openLink(){
    
  }
}

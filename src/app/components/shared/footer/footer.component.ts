import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  author = 'Laguna';
  currentYear: number;

  constructor(){
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
  }
}

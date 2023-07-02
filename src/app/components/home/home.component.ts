import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, startWith, map } from 'rxjs';
import { City } from 'src/app/entity/City';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  myControl = new FormControl('');
  cityId: number = 0;
  datos: City[] = [];

  constructor(private homeService: HomeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getDatos('');
  }

  onInputChange() {
    const city = this.myControl.value;
    if (city !== null) {
      this.getDatos(city);
    }
  }

  onFormSubmit() {
    console.log('City ID seleccionado:', this.cityId);
  }
  getDatos(city: string) {
    this.homeService.getDatos(city).subscribe({
      next: response => {
        this.datos = response;
        // Realiza cualquier acción adicional con los datos recibidos
      },
      error: error => {
        console.log('Error al obtener los datos:', error);
      }});
  }
  onSearchClick(id: number) {
    const url = '/propertys/'+ id;
    this.router.navigateByUrl(url);
  }

}

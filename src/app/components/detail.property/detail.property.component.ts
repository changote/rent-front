import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/entity/Property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-detail.property',
  templateUrl: './detail.property.component.html',
  styleUrls: ['./detail.property.component.css']
})
export class DetailPropertyComponent implements OnInit {
  id: any;
  property! : Property;
  
  constructor(private propertyService: PropertyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.propertyService.getPropertyDatos(this.id).subscribe({
      next: response => {
        this.property = response;
        // Realiza cualquier acción adicional con los datos recibidos
      },
      error: error => {
        console.log('Error al obtener los datos:', error);
      }});;
  }

  getStarsArray(stars: number): number[] {
    return Array(stars).fill(0);
  }
}

import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/entity/Property';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-propertys',
  templateUrl: './propertys.component.html',
  styleUrls: ['./propertys.component.css']
})
export class PropertysComponent {
  datos!: Property[];
  city!: string; // Ciudad deseada, puedes modificarla según tus necesidades

  constructor(private propertyService: PropertyService, private router: Router, private route: ActivatedRoute) {
  }

  getStarsArray(stars: number): number[] {
    return Array(stars).fill(0);
  }
  goToDetail(id: number){
    console.log(id);
    this.router.navigate(['/detail/', id]);
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.city = params['city'];
      // Perform any additional logic or API calls to fetch properties based on the city
    });
    this.propertyService.getDatos(this.city).subscribe({
      next: response =>{
        this.datos = response;
        // Realiza cualquier acción adicional con los datos recibidos
      },
      error: error => {
        console.log('Error al obtener los datos:', error);
      }}
    );
    this.onWindowResize(event);
  }

  showDescription: boolean = true;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.showDescription = window.innerWidth >= 575;
  }
}

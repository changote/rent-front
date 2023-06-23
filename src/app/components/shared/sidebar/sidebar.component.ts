import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  minPrice = 0;
  maxPrice = 100000;
  selectedMinPrice = 5000; // Valor predeterminado del mínimo
  selectedMaxPrice = 20000; // Valor predeterminado del máximo

  selectedPropertyTypes: string[] = [];
  selectedFeatures: string[] = [];
  selectedCapacities: string[] = [];

  propertyTypes: string[] = ['Casa', 'Cabaña', 'Departamento'];
  features: string[] = ['Aire acondicionado', 'Calefacción', 'DVD player', 'Garaje', 'Jardín', 'Piscina', 'Televisión', 'Wi-Fi', 'Se aceptan mascotas', 'Grupos de jóvenes'];
  capacities: string[] = ['5 personas', '6 personas', '8 personas'];

  toggleSelection(value: string, array: string[]) {
    if (array.includes(value)) {
      array.splice(array.indexOf(value), 1);
    } else {
      array.push(value);
    }
  }
  
}

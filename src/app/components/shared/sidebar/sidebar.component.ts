import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  miFormulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.miFormulario = this.formBuilder.group({
      // Definir los campos del formulario y sus valores predeterminados
    });
    this.onWindowResize(event);
  }
  minPrice = 0;
  maxPrice = 100000;
  selectedMinPrice = 5000; // Valor predeterminado del mínimo
  selectedMaxPrice = 20000; // Valor predeterminado del máximo

  selectedPropertyTypes: string[] = [];
  selectedFeatures: string[] = [];
  selectedCapacities: string[] = [];

  cantDays: string[] = ['Dia', 'Semana', 'Quincena', 'Mes'];
  propertyTypes: string[] = ['Casa', 'Cabaña', 'Departamento'];
  features: string[] = ['Aire acondicionado', 'Calefacción', 'Garaje', 'Jardín', 'Piscina', 'Televisión', 'Wi-Fi', 'Se aceptan mascotas'];
  capacities: string[] = ['5 personas', '6 personas', '8 personas'];

  borrarFiltros() {
    this.miFormulario.reset();
  }

  showSidebar: boolean = true;

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.showSidebar = window.innerWidth >= 575;
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
  
  
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-detail-toolbar',
  templateUrl: './detail.toolbar.component.html',
  styleUrls: ['./detail.toolbar.component.css']
})
export class DetailToolbarComponent {
  id: any;
  city: any;

  constructor(private route: ActivatedRoute, private propertyService: PropertyService){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      });
      
      this.city = this.propertyService.getCity(this.id);
        console.log(this.city);
  }
}

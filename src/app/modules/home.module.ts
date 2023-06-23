import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../components/login/login.component';
import { LoginOutComponent } from '../components/shared/login-out/login-out.component';
import { HomeComponent } from '../components/home/home.component';
import { MaterialModule } from './material.module';
import { HomeRoutingModule } from './home-routing.module';
import { ToolbarComponent } from '../components/shared/toolbar/toolbar.component';
import { PropertysComponent } from '../components/propertys/propertys.component';
import { FooterComponent } from '../components/shared/footer/footer.component';
import { SidebarComponent } from '../components/shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginOutComponent,
    HomeComponent,
    PropertysComponent,
    ToolbarComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    MaterialModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class HomeModule { }

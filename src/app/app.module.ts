import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { DetailPropertyComponent } from './components/detail.property/detail.property.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PropertysComponent } from './components/propertys/propertys.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginOutComponent } from './components/shared/login-out/login-out.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { DetailToolbarComponent } from './components/detail.toolbar/detail.toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailPropertyComponent,
    LoginComponent,
    LoginOutComponent,
    HomeComponent,
    PropertysComponent,
    ToolbarComponent,
    FooterComponent,
    SidebarComponent,
    DetailToolbarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

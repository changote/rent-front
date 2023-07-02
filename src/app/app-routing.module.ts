import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailPropertyComponent } from './components/detail.property/detail.property.component';
import { LoginComponent } from './components/login/login.component';
import { PropertysComponent } from './components/propertys/propertys.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'propertys/:city', component: PropertysComponent },
  { path: 'detail/:id', component: DetailPropertyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

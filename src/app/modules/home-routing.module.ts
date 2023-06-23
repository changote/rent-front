import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { PropertysComponent } from '../components/propertys/propertys.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'propertys', component: PropertysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

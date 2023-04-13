import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './mi-nutricion/datos/datos.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path : "miNutricion",
    component: DatosComponent
  },
  {
    path : "tarjetas",
    component: TarjetasComponent
  },
  {
    path : "**",
    component: IntroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

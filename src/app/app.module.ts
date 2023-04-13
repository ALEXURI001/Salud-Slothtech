import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SwiperModule } from 'swiper/angular';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { ColacionesComponent } from './colaciones/colaciones.component';
import { MiNutricionModule } from './mi-nutricion/mi-nutricion.module';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TarjetasComponent,
    ColacionesComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    HttpClientModule,
    MiNutricionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

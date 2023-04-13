import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { DatosComponent } from './datos/datos.component';




@NgModule({
  declarations: [
    DatosComponent,
    RespuestaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ]
})
export class MiNutricionModule { }

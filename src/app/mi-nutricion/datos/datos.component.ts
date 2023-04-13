import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RespuestaComponent } from '../respuesta/respuesta.component';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  RegisForm: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.RegisForm =  this.fb.group({
      Sexo: ['',Validators.required],
      Edad: ['',Validators.required],
      Peso: ['',Validators.required],
      Altura: ['',Validators.required],
      Padecimientos: ['',Validators.required],
      Alergias: ['',Validators.required]
    })
  }

  padecimientos:string[] = ["Cancer","Obesidad","Hipertension","Hipotiroidismo","Hipertiroidismo","Diabetes"]

  padecimientosUsuario:string[] = []

  alergias:string[] = ["Cacahuate","Leche","Huevo","L","S"]

  alergiasUsuario:string[] =[]

  imc:number = 0;

  ngOnInit(): void {
    
  }

agregarPadecimiento(){
this.padecimientosUsuario.push(this.RegisForm.value.Padecimientos);
console.log(this.padecimientosUsuario);

}

agregarAlergia(){
  this.alergiasUsuario.push(this.RegisForm.value.Alergias);
  console.log(this.alergiasUsuario);
  
  }

  borrarPadecimiento(pade:string){
    console.log(this.padecimientosUsuario);
    
    this.padecimientosUsuario = this.padecimientosUsuario.filter((padecimiento) =>{if(pade == padecimiento)return false; else return true;})
  }

  borrarAlergia(alerg:string){
    console.log(this.padecimientosUsuario);
    
    this.alergiasUsuario = this.alergiasUsuario.filter((alergia) =>{if(alerg == alergia)return false; else return true;})
  }

enviar(){

   this.imc = Number(this.RegisForm.value.Peso) / (( Number(this.RegisForm.value.Altura)/100)*(Number(this.RegisForm.value.Altura)/100));
  this.imc = Number(this.imc.toFixed(1));
  
}

}

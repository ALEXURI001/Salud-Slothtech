import { Component, OnInit } from '@angular/core';
import { TarjetasService } from './tarjetas.service';
import { Comida } from './tarjetas.interface';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

constructor(
private serviceTarjetas: TarjetasService,
){}
comidas: Comida[] = [];

ngOnInit(): void {
  this.loadAll();

}

loadAll(){
  this.serviceTarjetas.getAll().subscribe(
    (result) =>{
    if(result.status){
      this.comidas = result.comidas;
      console.log(this.comidas.length)
    }
    }
  )
}

actualizar(){
  this.loadAll();
}


}

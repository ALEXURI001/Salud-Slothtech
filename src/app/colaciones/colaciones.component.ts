import { Component } from '@angular/core';
import { ColacionesService } from './colaciones.service';
import { Colacione } from './colaciones.interface';

@Component({
  selector: 'app-colaciones',
  templateUrl: './colaciones.component.html',
  styleUrls: ['./colaciones.component.css']
})
export class ColacionesComponent {

  constructor(
    private serviceColaciones: ColacionesService
  ){}

  colaciones: Colacione[] = [];

  
ngOnInit(): void {
  this.loadAll();

}

loadAll(){
  this.serviceColaciones.getAll().subscribe(
    (result) =>{
    if(result.status){
      this.colaciones = result.colaciones;
    }
    }
  )
}

actualizar(){
  this.loadAll();
}


}

import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnChanges {

  @Input() imc:number=0;
  @Input() padecimientos:string[]=[];

condicion:string = "";

recomendaciones:string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    
    if (this.imc <18.5) {
      this.condicion = " <18.5 - Bajo Peso";
    }
    else if (this.imc >= 18.5 && this.imc <= 24.9){
      this.condicion = "18.5 a 24.9 - Normal";
    }
    else if (this.imc >= 25 && this.imc <= 29.9){
      this.condicion = "25 a 29.9 - Sobrepeso";
    }
    else if (this.imc >= 30 && this.imc <= 34.9){
      this.condicion = "30 a 34.9 - Obesidad 1";
    }
    else if (this.imc >= 35 && this.imc <= 39.9){
      this.condicion = "35 a 39.9 - Obesidad 2";
    } 
    else {
      this.condicion = "40< - Obesidad 3";
    }


    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['IMC'],
          datasets: [{
              label: 'IMC',
              data: [this.imc],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 50
                }
            }]
        }
    }
  });

this.padecimientos.map((pade) => {
  if(pade == "Diabetes"){
    this.recomendaciones.push("En lugar de hacer 3 comidas abundantes, es preferible fraccionarlas en 5 ingestas, De esta manera evitaremos las fluctuaciones en los niveles de glucosa");
    this.recomendaciones.push("Algunas de las frutas desaconsejadas para diabéticos son la uva, la sandía, los higos o la papaya, así como las frutas enlatadas");
    this.recomendaciones.push("Coma alimentos enteros y granos integrales en lugar de alimentos procesados. Contienen más fibra, son más nutritivos y no aumentan tanto el azúcar en la sangre.");
    this.recomendaciones.push("Siempre tenga comida a mano, algo pequeño, fácil de transportar, esto es útil para evitar que su nivel de azúcar en la sangre baje demasiado");

  }
}
);

this.padecimientos.map((pade) => {
  if(pade == "Obesidad"){
    this.recomendaciones.push("Planifique los desayunos, comidas y cenas con antelación con la herramienta “DietaDigna” para que siempre disponga de alimentos saludables listos para consumir");
    this.recomendaciones.push("Aumente la frecuencia de consumo semanal de legumbres como fuente de hidratos de carbono");
    this.recomendaciones.push("Para cocinar carnes y pescados envuélvalas en papel de aluminio (papillote), así se cocinan en su propio jugo, conservándose tiernos y gustosos, sin necesidad de añadirle grasa.");
    this.recomendaciones.push("Aprenda a leer las etiquetas (ingredientes e información nutricional) para poder seleccionar o descartar un producto alimentario");

  }
}
);

this.padecimientos.map((pade) => {
  if(pade == "Hipertension"){
    this.recomendaciones.push("Es recomendable que sus preparaciones sean horneadas, a la plancha, a la parrilla, guisadas y con salsas naturales , así podrá controlar la ingesta de alimentos ricos en sodio, como condimentos, cubitos, salsa inglesa y salsa de soya.");
    this.recomendaciones.push("Evite añadir sal a los alimentos una vez preparadas");
    this.recomendaciones.push("Elija alimentos ricos en potasio que pueden ayudar a reducirle la presión arterial");
    this.recomendaciones.push("Reduzca la ingesta de grasas saturadas y colesterol presente en alimentos tales como:Hígado, yema de huevo, mayonesa, mantequilla y manteca");

  }
}
);  

this.padecimientos.map((pade) => {
  if(pade == "Hipertiroidismo"){
    this.recomendaciones.push("Consume alimentos que disminuyen la absorción de yodo, como el Repollo, coliflor, brócoli, rábano y coles de Bruselas, las Carnes de ternera, pavo, pollo y pescado ricos en selenio");
    this.recomendaciones.push("Evita consumir alimentos ricos en yodo como tomates,  espinacas y ajo, habas, soja, maíz, girasol, guisantes y lentejas, manzana, piña, mango, dátiles, coco, nueces de Brasil y fresas");
    this.recomendaciones.push("Consume alimentos ricos en Selenio como: carne roja, pescado, hortalizas, piñones, huevos, champiñones o trigo");
    this.recomendaciones.push("No deje pasar más de una hora, desde que se levanta sin desayunar, y no deje pasar más de 4-5 horas entre comidas; si pasan más de 3 horas desde la cena a la hora de acostarse, debe tomarse un snack");

  }
}
); 

this.padecimientos.map((pade) => {
  if(pade == "Hipotiroidismo"){
    this.recomendaciones.push("Eliminar de la dieta el consumo crudo de las siguientes hortalizas y de alimentos derivados: col, lombarda, col de Bruselas, coliflor, berza, repollo, brócoli, grelos, nabos, mostazas, espinacas, zanahorias y rábanos");
    this.recomendaciones.push("Consuma alimentos ricos en yodo como el pescado, los mariscos, los huevos, la leche y otros productos lácteos");
    this.recomendaciones.push("Reducir o evitar el consumo de ciertos frutos secos como nueces, piñones y cacahuetes");
    this.recomendaciones.push("Eliminar totalmente el consumo de tabaco, ya que, además de ser dañino por su toxicidad, contiene sustancias que compiten por la biodisponibilidad del yodo en la glándula tiroides");

  }
}
); 

  }

  

}

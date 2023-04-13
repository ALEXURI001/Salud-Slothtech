import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/enviroments";
import { RespuestaComida } from "./tarjetas.interface";


@Injectable({
    providedIn: 'root'
  })
export class TarjetasService{

    constructor(private http: HttpClient) { }

    getAll(){
      const url = `${environment.urlBase}/api/dietaDigna/generarComidas/3`
      return this.http.get<RespuestaComida>(url)}

}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/enviroments";
import { RespuestaColaciones } from "./colaciones.interface";

@Injectable({
    providedIn: 'root'
  })
  export class ColacionesService{

    constructor(private http: HttpClient) { }

    getAll(){
        const url = `${environment.urlBase}/api/dietaDigna/generarColaciones/2`
        return this.http.get<RespuestaColaciones>(url)}
  
  }
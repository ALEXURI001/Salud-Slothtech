export interface RespuestaComida {
    status:  boolean;
    comidas: Comida[];
}

export interface Comida {
    id:           string;
    foto:         string;
    descripcion:  string;
    nombre:       string;
    ingredientes: string;
    calorias:     string;
}

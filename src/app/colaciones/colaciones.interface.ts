export interface RespuestaColaciones {
    status:     boolean;
    colaciones: Colacione[];
}

export interface Colacione {
    id:           string;
    foto:         string;
    descripcion:  string;
    nombre:       string;
    ingredientes: string;
    calorias:     string;
}

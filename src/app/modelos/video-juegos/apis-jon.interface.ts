export interface VideoJuego {
    _id: {
      "$oid": string;
    };
    clave: string;
    nombre: string;
    categoria: {
      categoria: string;
      tipo: string;
    };
    marcasId: string[];
    version: string;
    idiomas: string[];
    jugadores: number;
    descripcion: string;
    costo: number;
    precio: number;
    foto: string;
    fechaAdquisicion: {
      "$date": string;
    };
    fecharegistro: {
      "$date": string;
    };
    cantidadExistente: number;
    estado: string;
    origen: string;
    provId: string;
  }
  
  //export interface VideoJuego {

 //   _id: string;
//    fotoProducto: string;
//    nombProd: string;
//    url:string;
//    cantExistente: number;
//    caracteristicas: string[];
 //   width: number; // Puedes agregar este campo si no está presente en la interfaz original
//    height: number; // Puedes agregar este campo si no está presente en la interfaz original
 // }
  

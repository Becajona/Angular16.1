export interface Producto {
    _id: string;
    nombre: string;
    precio: number;
    cantidadExistente: number;
    // Agrega aquí cualquier otro campo que tenga un producto
  }
  
  export interface Carrito {
    listaProductos: Producto[];
    fechaCompra: string;
    clienteId: string;
    // Puedes agregar más campos si es necesario
  }
  
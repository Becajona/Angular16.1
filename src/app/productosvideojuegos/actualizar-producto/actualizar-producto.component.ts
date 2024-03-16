import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  prodId: string | null = null;
  producto: any = {}; // Tipo del producto, ajusta según la estructura de tu producto

  constructor(private router: ActivatedRoute, private servicio: VideoJuegosService) { }

  ngOnInit(): void {
    this.prodId = this.router.snapshot.paramMap.get('id');
    console.log('ID del producto:', this.prodId);
    // Aquí puedes realizar cualquier otra lógica necesaria con el ID del producto
    this.obtenerProductoPorId();
  }

  obtenerProductoPorId(): void {
    if (this.prodId) {
      this.servicio.obtenerProductoPorId(this.prodId).subscribe((producto: any) => {
        this.producto = producto;
      });
    }
  }

  actualizarProducto(): void {
    if (this.prodId && this.producto) {
      this.servicio.actualizarProducto(this.prodId, this.producto).subscribe(res => {
        // Manejar la respuesta si es necesario
        console.log('Producto actualizado:', res);
      });
    }
  }
}






function actualizarProducto() {
  throw new Error('Function not implemented.');
}
//implements OnInit {
//  prodId: string | null = null;
//  producto: any; // Tipo del producto, ajusta según la estructura de tu producto

//  constructor(private router: ActivatedRoute, private servicio: TuServicio) { }

//  ngOnInit(): void {
//    this.prodId = this.router.snapshot.paramMap.get('id');
//    this.obtenerProductoPorId();
 // }

 // obtenerProductoPorId(): void {
  //  if (this.prodId) {
 //     this.servicio.get_by_id(this.prodId).subscribe((producto: any) => {
//        this.producto = producto;
//        // Aquí puedes realizar cualquier lógica adicional con el producto obtenido
//      });
//    }
//  }
//}


//actualizarProducto(): void {
 // if (this.prodId && this.producto) {
  //  this.servicio.actualizarProducto(this.prodId, this.producto).subscribe(res => {
      // Manejar la respuesta si es necesario
 //   });
 // }
//}
//}

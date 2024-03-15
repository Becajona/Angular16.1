import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcasService } from 'src/app/servicios/marcas.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-eliminar-marca',
  templateUrl: './eliminar-marca.component.html',
  styleUrls: ['./eliminar-marca.component.css']
})
export class EliminarMarcaComponent implements OnInit {
  prodId: string | null = null;
  messageErr: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioProd: MarcasService
  ) { }
  
  ngOnInit(): void {
    this.prodId = this.route.snapshot.paramMap.get('id');
    console.log(this.prodId);
//    this.eliminar();
  }

//  eliminar(): void {
//    this.servicioProd.eliminar(this.prodId)
//      .pipe(
//        catchError((error) => {
//          this.messageErr = error.error.message;
//          return throwError(error);
//        })
//      )
//      .subscribe(() => {
//        console.log('Producto eliminado correctamente');
//        alert('Producto eliminado');
//        // Redirecciona para cargar el componente catálogo
//        this.router.navigate(['/catalogoMarcas']);
//      });
//  }
}

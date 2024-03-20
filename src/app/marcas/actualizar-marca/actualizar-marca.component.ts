import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarcasService } from 'src/app/servicios/marcas.service';
import { Marca } from 'src/app/modelos/video-juegos/marcas.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-marca',
  templateUrl: './actualizar-marca.component.html',
  styleUrls: ['./actualizar-marca.component.css']
})
export class ActualizarMarcaComponent implements OnInit {
  marcaId: string | null = null;
  marcaForm: FormGroup;
  marca: Marca = { 
    _id: '', 
    marcaId: 0, 
    nombre: '', 
    slogan: '', 
    productosDestacados: '', 
    segmentoMercado: ''
  };

  constructor(private route: ActivatedRoute, private marcasService: MarcasService) {
    this.marcaForm = new FormGroup({
      marcaId: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      slogan: new FormControl('', Validators.required),
      productosDestacados: new FormControl('', Validators.required),
      segmentoMercado: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.marcaId = this.route.snapshot.paramMap.get('id');
    console.log('ID de la marca:', this.marcaId);
    if (this.marcaId) {
      this.obtenerMarcaPorId();
    }
  }

  onSubmit() {
    if (this.marcaForm.valid && this.marcaId) {
      const marca = this.marcaForm.value;
      this.marcasService.actualizarMarcaPorId(this.marcaId, marca).subscribe(response => {
        console.log('Marca actualizada:', response);
        // Aquí puedes redirigir a la página de detalle de la marca actualizada
      });
    } else {
      console.error("El formulario es inválido o el ID de la marca es nulo.");
    }
  }

  obtenerMarcaPorId(): void {
    if (this.marcaId !== null) {
      this.marcasService.obtenerMarcaPorId(this.marcaId).subscribe(data => {
        this.marcaForm.setValue({
          marcaId: data.marcaId,
          nombre: data.nombre,
          slogan: data.slogan,
          productosDestacados: data.productosDestacados,
          segmentoMercado: data.segmentoMercado
        });
      });
    }
  }
}

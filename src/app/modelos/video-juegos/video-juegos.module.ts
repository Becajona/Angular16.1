import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoJuego } from './apis-jon.interface'; // Importa la interfaz
import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    //VideoJuego 
  ],
  providers: [
    VideoJuegosService,
    ProveedoresService
  ]
})
export class VideoJuegosModule { }
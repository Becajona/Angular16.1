import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoJuego } from './apis-jon.interface'; // Importa la interfaz
import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    //VideoJuego 
  ],
  providers: [
    VideoJuegosService
  ]
})
export class VideoJuegosModule { }
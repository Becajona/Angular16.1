import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})


export class EliminarComponent implements OnInit {
  prodId: string | null = null;

  constructor(
    private ruta: Router,
    private router: ActivatedRoute,
    private servicioProd: VideoJuegosService
  ) {}

  ngOnInit(): void {
    this.prodId = this.router.snapshot.paramMap.get('id');
    console.log(this.prodId);

  }

  messageErr: any;
 
}

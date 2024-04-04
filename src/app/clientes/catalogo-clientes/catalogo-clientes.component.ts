import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';
import { Cliente } from 'src/app/modelos/video-juegos/clientes.interface';

@Component({
  selector: 'app-catalogo-clientes',
  templateUrl: './catalogo-clientes.component.html',
  styleUrls: ['./catalogo-clientes.component.css']
})
export class CatalogoClientesComponent implements OnInit {
  listaClientes: Cliente[] = [];

  constructor(public api: ClientesService) { }

  ngOnInit(): void {
    this.api.obtenerTodosLosClientes().subscribe((data: Cliente[]) => {
        console.log(data);
        this.listaClientes = data;
      });
  }
}

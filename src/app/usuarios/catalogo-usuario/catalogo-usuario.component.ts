import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Usuarios } from 'src/app/modelos/video-juegos/usuarios.interface';

@Component({
  selector: 'app-catalogo-usuario',
  templateUrl: './catalogo-usuario.component.html',
  styleUrls: ['./catalogo-usuario.component.css']
})
export class CatalogoUsuarioComponent implements OnInit {
  listaUsuarios: Usuarios[] = [];

  constructor(public usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.obtenerTodos().subscribe((data: Usuarios[]) => {
      console.log("Datos recibidos del servidor:", data);
      this.listaUsuarios = data;

      if (this.listaUsuarios && this.listaUsuarios.length > 0) {
        console.log("listaUsuarios contiene datos:", this.listaUsuarios);
      } else {
        console.log("listaUsuarios está vacía o no contiene datos esperados.");
      }
    });
  }
}

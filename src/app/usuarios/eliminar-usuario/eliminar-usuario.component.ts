import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {
  usuarioId: string | null = null;
  errorMessage: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.paramMap.get('id');
    console.log(this.usuarioId);
  
    this.router.navigate(['/catalogoempleado']);
  }

  eliminarUsuario(id: string | null) {
    if (id) {
      this.usuariosService.eliminarUsuario(id).subscribe(
        () => {
          console.log('Usuario eliminado correctamente');
        },
        error => {
          console.error('Error al eliminar el usuario:', error);
          this.errorMessage = error;
        }
      );
    } else {
      console.error('El ID del usuario es nulo.');
    }
  }

  confirmarEliminacion(id: string) {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.eliminarUsuario(id);
    }
  }
}

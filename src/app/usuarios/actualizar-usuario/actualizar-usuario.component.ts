import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importa ActivatedRoute
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {
  usuarioId: string | null = null;
  usuarioForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private usuariosService: UsuariosService) { // Agrega ActivatedRoute al constructor
    this.usuarioForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      rol: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.paramMap.get('id'); 
    console.log('ID del usuario:', this.usuarioId);
    if (this.usuarioId) {
      this.obtenerUsuarioPorId();
    }
  }

  onSubmit() {
    if (this.usuarioForm.valid && this.usuarioId) {
      const usuario = this.usuarioForm.value;
      this.usuariosService.actualizarUsuarioPorId(this.usuarioId, usuario).subscribe(response => {
        console.log('Usuario actualizado:', response);
   
        this.router.navigate(['/catalogousuario']); 
      });
    } else {
      console.error("El formulario es inválido o el ID del usuario es nulo.");
    }
  }

  obtenerUsuarioPorId(): void {
    if (this.usuarioId !== null) {
      this.usuariosService.obtenerUsuarioPorId(this.usuarioId).subscribe(data => {
        this.usuarioForm.setValue({
          email: data.email,
          password: data.password,
          rol: data.rol
        });
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder,
              private usuariosService: UsuariosService,
              private router: Router) {
    this.usuarioForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.required]],
      rol: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  agregarUsuario() {
    if (this.usuarioForm.valid) {
      const usuario = this.usuarioForm.value;
      this.usuariosService.guardarUsuario(usuario).subscribe(
        () => {
          console.log('Usuario guardado correctamente');
          this.router.navigate(['/index.html']); 
        },
        error => {
          console.error('Error al guardar usuario:', error);
        }
      );
    } else {
      console.error("El formulario es inválido.");
    }
  }
  onSubmit() {
    if (this.usuarioForm.valid) {
      const usuario = this.usuarioForm.value;
      console.log('Usuario a enviar:', usuario);
      this.usuariosService.guardarUsuario(usuario).subscribe(
        response => {
          console.log('Usuario agregado:', response);
          
        },
        error => {
          console.error('Error al agregar usuario:', error);
        }
      );
    } else {
      console.error("El formulario es inválido.");
    }
  }
}

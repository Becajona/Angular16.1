import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'http://192.168.1.72:4000/api/v1/usuarios';

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<any[]> {
    const url = `${this.apiUrl}/get_all`;
    return this.http.get<any[]>(url).pipe(
      tap(data => console.log('Datos obtenidos del servidor:', data)),
      catchError(err => {
        console.error('Error al obtener los datos del servidor:', err);
        return throwError(err);
      })
    );
  }

  //Crear nuevo

  guardarUsuario(usuario: any): Observable<any> {
    const url = `${this.apiUrl}/nuevousuario`; 
    return this.http.post<any>(url, usuario).pipe(
      tap((res: any) => {
        console.log('Usuario guardado correctamente');
      }),
      catchError(err => {
        console.error('Error al guardar usuario:', err);
        return throwError(err);
      })
    );
  }

  actualizarUsuarioPorId(id: string, usuario: any): Observable<any> {
    const url = `${this.apiUrl}/actualizar/${id}`;
    return this.http.put<any>(url, usuario).pipe(
      tap((res: any) => {
        console.log('Usuario actualizado correctamente');
      }),
      catchError(err => {
        console.error('Error al actualizar usuario:', err);
        return throwError(err);
      })
    );
  }

  obtenerUsuarioPorId(id: string): Observable<any> {
    const url = `${this.apiUrl}/porID/${id}`;
    return this.http.get<any>(url).pipe(
      tap(data => console.log('Usuario obtenido correctamente:', data)),
      catchError(err => {
        console.error('Error al obtener usuario:', err);
        return throwError(err);
      })
    );
  }

  eliminarUsuario(id: string): Observable<any> {
    const url = `${this.apiUrl}/eliminar/${id}`;
    return this.http.delete<any>(url).pipe(
      tap((res: any) => {
        console.log('Usuario eliminado correctamente');
      }),
      catchError(err => {
        console.error('Error al eliminar usuario:', err);
        return throwError(err);
      })
    );
  }


}

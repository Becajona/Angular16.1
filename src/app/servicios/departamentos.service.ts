import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  private apiUrl = 'http://192.168.1.72:4000/api/v1/departamentos';

  constructor(private http: HttpClient) { }

  obtenerTodosLosDepartamentos(): Observable<any[]> {
    const url = `${this.apiUrl}/get_all`;
    return this.http.get<any[]>(url).pipe(
      tap(data => console.log('Datos obtenidos del servidor:', data)),
      catchError(err => {
        console.error('Error al obtener los datos del servidor:', err);
        return throwError(err);
      })
    );
  }

  guardarDepartamento(departamento: any): Observable<any> {
    const url = `${this.apiUrl}/nuevodep`;
    return this.http.post<any>(url, departamento).pipe(
      tap((res: any) => {
        console.log('Departamento guardado correctamente');
      }),
      catchError(err => {
        console.error('Error al guardar departamento:', err);
        return throwError(err);
      })
    );
  }


  actualizarDepartamentoPorId(id: string, departamento: any): Observable<any> {
    const url = `${this.apiUrl}/actualizar/${id}`;
    return this.http.put<any>(url, departamento).pipe(
      tap((res: any) => {
        console.log('Departamento actualizado correctamente');
      }),
      catchError(err => {
        console.error('Error al actualizar departamento:', err);
        return throwError(err);
      })
    );
  }
  obtenerDepartamentoPorId(id: string): Observable<any> {
    const url = `${this.apiUrl}/porID/${id}`;
    return this.http.get<any>(url);
  }

  eliminarDepartamento(id: string): Observable<any> {
    const url = `${this.apiUrl}/eliminar/${id}`;
    return this.http.delete(url).pipe(
      tap((res: any) => {
        console.log('Departamento eliminado correctamente');
      }),
      catchError(err => {
        console.error('Error al eliminar departamento:', err);
        return throwError(err);
      })
    );
  }


}

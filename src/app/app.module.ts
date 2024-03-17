import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionModule } from './navegacion/navegacion.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductosvideojuegosModule } from './productosvideojuegos/productosvideojuegos.module'; 
import { VideoJuegosService } from './servicios/video-juegos.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MarcasModule } from './marcas/marcas.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacionModule,
    ProveedoresModule,
    HttpClientModule,
    FormsModule,
    ProductosvideojuegosModule,
    MarcasModule,
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([])
  ],
  providers: [
    VideoJuegosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

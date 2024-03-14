import { identifierName } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Marca } from 'src/app/modelos/video-juegos/marcas.interface';
import { MarcasService } from 'src/app/servicios/marcas.service';



@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
@ViewChild('ide_Marca') id_Marca: any; // Declare id_Marca
listaMarcas: Marca[] = [];
  miProd: any = {};
  imagen: any; // Define imagen property


  constructor(private servicioMarc: MarcasService) {}


  ngOnInit() {
    //this.servicioMarc.get_marcas()
    //.subscribe((data: Marca[]) => { // Define type for data
        //console.log(data);
        //this.listaMarcas = data;
      //});
  }

  get_id_marca(id: any) {
    this.miProd.marcaId = id; 
    console.log(this.miProd.marcaId);
  }

  convertirB64(event: any) {
    if (event.target.files && event.target.files[0]) {
      var file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Assuming you want to assign the base64 encoded image to imagen
        this.imagen = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  //enviarProd() {
    //this.miProd.costo = Number(this.miProd.costo);
    //this.miProd.foto = this.imagen; // Fix the typo here
    //console.log(this.miProd);
    //this.servicioProd.new_product(this.miProd)
      //.subscribe(data => {
        //console.log("PRODUCTO", data);
        //if (data) {
          //this.router.navigateByUrl('/prodCatalogo');
        //} else {
          //console.log("error");
        //}
      //});
 // }
  
  

//miCategoria: Categoria={

  //nombCat:'',
  //descCat:''
  //}
  //miProd: Producto={
  //nombProd:'',  
  //caracteristicas:[],
  //categoria: this.miCategoria,
  //fechaAdq:'',
  //costo: 0,  
  //descuento: 0, 
  //unidadMedida:'',
  //fotoProducto: '',
  //cantExistente: 0,
  //paisOrigen: '',
  //marcaId: '',
  //provId:
}

import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-producto-crear',
  templateUrl: './producto-crear.component.html',
  styleUrls: ['./producto-crear.component.css']
})
export class ProductoCrearComponent implements OnInit {

  @Input() producto: Producto;
  id: number;
  error: boolean;
  nota: string;
  descripcion: string;
  nombre: string;
  precio: number;
  temp:string;
  
  
    constructor(private productosService: ProductoService,
      private route: ActivatedRoute,
      private router: Router,
      public dialogRef: MatDialogRef<ProductoCrearComponent>,
      @Inject(MAT_DIALOG_DATA) public message: string) { }
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    ngOnInit() {
            //this.producto = this.productosService.getProducto(this.productosService.returnId());
            console.log(this.router.toString());
  
  
    }
  
    ngOnDestroy(){
      this.productosService.getNewProducto(this.productosService.getNextId(),this.nombre,this.descripcion,this.precio);
    }
  
   
    Validate(){
      if(this.precio<0){
       return true;
      }
    }
    
    nameExists(nombre: string){
      nombre=nombre.trim();
     const tmp= this.productosService.getProductos();
     const pro = tmp.find(pro => pro.nombre.toUpperCase() === nombre.toUpperCase());
     if(pro&&pro.nombre!=this.temp){
       return true;
     }
     else{
       return false;
     }
    }

  }


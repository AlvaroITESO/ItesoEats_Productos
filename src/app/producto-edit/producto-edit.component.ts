import { Component, OnInit, Input, Inject } from '@angular/core';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {

  @Input() producto: Producto;
id: number;
error: boolean;
nota: string;
descripcion: string;
nombre: string;
precio: number;
temp:string;

angForm: FormGroup;

  constructor(private productosService: ProductoService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductoEditComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) {
      
     }
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
          this.producto = this.productosService.getProducto(this.productosService.returnId());
          this.descripcion=this.producto.descripcion;
          this.nombre=this.producto.nombre;
          this.precio=this.producto.precio;
          this.id=this.producto.id;
          this.temp=this.producto.nombre;
          console.log(this.producto);
          this.createForm();


  }

  ngOnDestroy(){
    console.log("prueba");
    this.productosService.sendData(this.id, this.nombre,this.descripcion,this.precio);
  }

  ngDoCheck(): void {
  this.Validate();
  }

 
  createForm() {
   this.angForm = this.fb.group({
      name: ['', Validators.required ],
      precio: ['', Validators.required ],
   });
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





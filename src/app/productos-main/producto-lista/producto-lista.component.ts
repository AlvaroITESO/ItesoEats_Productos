import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Producto } from 'src/app/producto';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/producto.service';
import {Ng2PaginationModule} from 'ng2-pagination';
import { ModalConfirmComponent } from 'src/app/modal-confirm/modal-confirm.component';
import { MatDialog } from '@angular/material';
import { ProductoCrearComponent } from 'src/app/producto-crear/producto-crear.component';


@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {

 
 precio = ''
 precio2 = ''
 nombre = '';

  direction: 'row';
  productos: Producto[];
  carrito: Producto[];
  tmp: Producto[];
  private subscript: Subscription;
  modoCarrito = false;
  error = false;
  count = 0;
  suma = 0;
  ordenarPorPrecioValue=false;
  ordenarPorNombreValue=false;
  ordenarPorDisponible=false;
  getId=[];

  constructor(private productosService: ProductoService,
              private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog ) { }

              

  ngOnInit() {
    this.productosService.currentLength = 0;
   
    this.carrito = this.productosService.getCarrito();
    this.tmp = null;

    this.getId= this.router.url.split('/');

    if(this.getId.length==3){
      this.productos = this.productosService.getProductosbyId(this.getId[2]);
    }
    else{
      this.productos=this.productosService.getProductos();
    }
    console.log(this.getId[2]);

    if (this.router.url == '/productos' || this.router.url== ('/tienda/'+this.getId[2])) {
      this.modoCarrito = false;
    } else {
      this.modoCarrito = true;
    }

   /* this.subscript = this.productosService.cambiaDato.subscribe((producto: Producto[]) => {
      this.productos = producto;
    }
    
  );*/
  }
  ngDoCheck()	{
    
   
    this.filtrar();
    

  }

  openCreate(): void {
    let tmp=[];
    tmp=this.router.url.toString().split('/');
      this.productosService.sendTiendaId(tmp[2]);

    const dialogRef = this.dialog.open(ProductoCrearComponent, {
      width: '350px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        let tmp=this.productosService.returnNewProducto();
        tmp.tiendaId=this.productosService.getTiendaId();
       this.productosService.AddProduct(tmp);
        //this.productoservice.addToCart1(this.producto);

      }
    });
  }



 

 

  detalle(p: Producto) {
    this.router.navigate([p.id], {relativeTo: this.route});
  }

  borrar(p: Producto) {
    this.productosService.borrarProducto(p.id);
    this.carrito = this.productosService.getCarrito();
    this.sumar();
  }



  sumar() {
    this.suma = 0;
    if (this.carrito != null){
    this.carrito.forEach(pro => this.suma = pro.precio*pro.cantidad + this.suma);
    return this.suma;
  }
  else{
    return 0;
  }
    };

    filtroPorTienda(){
      if(this.getId.length==3){
        this.productos = this.productosService.getProductosbyId(this.getId[2]);
        this.productos = this.productos.filter(p => p.tiendaId==Number(this.getId[2]));
      }   
    }

    filtrar(){
      this.productos=this.productosService.getProductos();
      this.filtroPorTienda();
      if(this.ordenarPorPrecioValue){
        this.ordenarPorPrecio();
      }

      if(this.ordenarPorNombreValue){
        this.ordenarPorNombre();
      }
      if (Number(this.precio) == 0 && Number(this.precio2) == 0){
        this.precio2 = '99999999';
      }
     this.productos = this.productos.filter(p => p.precio > Number(this.precio) && p.precio < Number(this.precio2) && p.nombre.toUpperCase().match(this.nombre.toUpperCase()));

     
     if (this.precio2 == '99999999'){
      this.precio2 = '';
     }

     if(this.ordenarPorDisponible){
      this.productos= this.productos.filter(p => p.disponible == true);
    }

  
    }

    ordenarPorPrecio(){
      this.productos= this.productosService.getProductos();
      this.filtroPorTienda();
      this.productos.sort((a, b) => (a.precio > b.precio) ? 1 : -1);
    }

    ordenarPorNombre(){
      this.productos=this.productosService.getProductos();
      this.filtroPorTienda();
      this.productos.sort((a,b) =>(a.nombre>b.nombre)?1: -1);
    }

    updateMostrarDisponible(event){
      if(event.target.checked) {   
        this.ordenarPorDisponible= true;
      }
  
      else if( !event.target.checked){
        this.ordenarPorDisponible= false;

  
      }
    }
    updateOrdenarPrecio(event){
      if(event.target.checked) {   
        this.ordenarPorPrecioValue= true;
        this.ordenarPorNombreValue= false;

      }
  
      else if( !event.target.checked){
        this.ordenarPorPrecioValue= false;
        this.ordenarPorNombreValue= true;


  
      }
    }

    updateOrdenarNombre(event){
      if(event.target.checked) {   
        this.ordenarPorNombreValue= true;
        this.ordenarPorPrecioValue=false;
      }
  
      else if( !event.target.checked){
        this.ordenarPorNombreValue= false;
        this.ordenarPorPrecioValue=true;


  
      }
    }

    getTotal(){
      if(this.suma>0){
        return false;
      }
      return true;
    }


  

}


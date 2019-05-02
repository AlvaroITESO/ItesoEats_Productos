import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  cambiaDato = new Subject<Producto[]>();
  private lastId = 1;

  productos: Producto[] = [
    new Producto(this.lastId++, 'Pizza Pepperoni', '8 rebanadas deliciosas', true, 129, 1,'',3),//HH
    new Producto(this.lastId++, 'Hamburguesa de res', 'Hamburguesa especialidad de la casa', true, 79, 1,'',3),
    new Producto(this.lastId++, 'Combo Básico', 'Hamburguesa de res más refresco de 600ml', true, 99, 1,'',3),
    new Producto(this.lastId++, 'Taco de Pastor', 'Taco normal con todos los ingredientes', true, 18, 1,'',2),
    new Producto(this.lastId++, 'Taco de Carne Asada', 'Incluye todos los ingredientes', true, 18, 1,'',2),
    new Producto(this.lastId++, 'Ensalada', 'Ensalada Chica', true , 48, 1,'',1),
    new Producto(this.lastId++, 'Emparedado', 'Delicioso emparedado', true, 32, 1,'',1),
    new Producto(this.lastId++, 'Megaburro Carne Asada', 'Gran comida', true, 60, 1,'',2),
    new Producto(this.lastId++, 'Pizza Mexicana', 'Pizza con los mejores sabores', true , 120, 1,'',3)//hh
    
  ];
carrito1: Producto[] = [];
 carrito: Producto[] = [];
currentLength=0;
suma=0;
a=-1;
n="No hay nota";
cantidad=1;
newProductId=-1;


  idEditar = -1;
  nombreEditar= '';
  descripcionEditar='';
  precioEditar=0;
 newProduct=new Producto(0,'','',true,0,1,'',1);




  constructor() { }

  getNextId(): number {
    return this.lastId;
  }

  getProductos(): Producto[] {
    return this.productos.slice();
  }

  getProductosbyId(id: number): Producto[]{
    const tmp=[];
    
    this.productos.slice().forEach(p => {

      if(id ==0){
        tmp.push(p);
      }
      else if(p.tiendaId==id){
        tmp.push(p);
      }
      
    })
    return tmp.slice();

  }

  RestarProducto(){
    this.currentLength--;
  }

  SumarProducto(){
    this.currentLength++;
  }

  AddProduct(producto: Producto){
    this.productos.push(producto);
  }

  

  getProducto(id: number): Producto {
    const pos = this.productos.findIndex(al => al.id === id);
    return Object.assign({}, this.productos[pos]);
  }

  notificarCambios() {
    this.cambiaDato.next(this.productos.slice());
  }
  notificarCambiosCarrito() {
    this.cambiaDato.next(this.carrito.slice());
  }

  getCurrentLenght(){
    return this.currentLength;
  }

  addToCart(producto: Producto, notaProducto: string, cantidadProducto: number): boolean {
    const pro = this.carrito.find(pro => pro.nombre.toUpperCase() === producto.nombre.toUpperCase());
    if (pro) {
      return false;
    }
    producto.nota=notaProducto;
    producto.cantidad=cantidadProducto;
    this.carrito.push(Object.assign({}, producto));
    this.notificarCambiosCarrito();
    console.log("Prueba");
    this.productos=this.getProductos();
    return true;
  }

 

  getCarrito(): Producto[] {
    return this.carrito.slice();
  }

 

  borrarProductoTienda(id: number): boolean {
    console.log("hola");//H
    const pos = this.productos.findIndex(p => p.id == id);
    if (pos >= 0) {
      this.productos.splice(pos, 1);
      this.notificarCambios();
      return true;
    }
    return false;
  }

  borrarProducto(id: number): boolean {
    console.log("hola");
    const pos = this.carrito.findIndex(p => p.id == id);
    if (pos >= 0) {
      this.carrito.splice(pos, 1);
      this.notificarCambiosCarrito();
      return true;
    }
    return false;
  }

  

  saveId(id:number): void{
    this.a=id;
  }

  returnId(): number{
    return this.a;
  }

  getNota(nota:string, cantidadCarrito: number):void {
    this.n=nota;
    this.cantidad=cantidadCarrito;
  }

  returnNota(){
   let a=[];
    a.push(this.n);
    a.push(this.cantidad);
    return a;
    
  }

  editProducto(id:number, nombreEditar:string, descripcionEditar: string, precioEditar: number){
    console.log("hola");
    let pos=this.productos.findIndex((pro => pro.id == id));
    this.productos[pos].nombre=nombreEditar;
    this.productos[pos].descripcion=descripcionEditar;
    this.productos[pos].precio=precioEditar;
    console.log(this.productos[pos].nombre);

  }

  getData(){
    let a=[];
    a.push(this.idEditar);
    a.push(this.nombreEditar);
    a.push(this.descripcionEditar);
    a.push(this.precioEditar);
    return a;
  }

  sendData(id: number, nombre: string, descripcion: string, precio: number){
    this.idEditar=id;
    this.nombreEditar=nombre;
    this.descripcionEditar=descripcion;
    this.precioEditar=precio;
  }

  changeD(id: number){
    let pos=this.productos.findIndex((pro => pro.id == id));
    this.productos[pos].disponible=!this.productos[pos].disponible;
    console.log(this.productos[pos]);
  }

  getNewProducto(id: number, nombreNuevo: string, descripcionNueva:string, precioNuevo:number){
     this.newProduct=new Producto(this.lastId++,nombreNuevo,descripcionNueva,true,precioNuevo,1,'',1);
    
  }

  returnNewProducto(){
    return this.newProduct;
  }

  sendTiendaId(id: string){
    this.newProductId=Number(id);
  }

  getTiendaId(){
    return this.newProductId;
  }

}//gfgfccc
 

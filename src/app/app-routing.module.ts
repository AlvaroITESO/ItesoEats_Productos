import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoListaComponent } from './productos-main/producto-lista/producto-lista.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductosMainComponent } from './productos-main/productos-main.component';
import { TiendaMainComponent } from './tienda-main/tienda-main.component';
import { TiendaListaComponent } from './tienda-main/tienda-lista/tienda-lista.component';


const routes: Routes = [
  {path: 'home', component: TiendaMainComponent},
  {path: 'productos', component: ProductosMainComponent, children: [
  {path: '', component: ProductoListaComponent},
  {path: ':id', component: ProductoDetalleComponent}
  ]},
  {path: 'tienda', component: TiendaMainComponent, children: [
    {path: '', component: TiendaListaComponent},
    {path: ':id', component: ProductoListaComponent}
    ]},
  {path: 'carrito',  component: ProductosMainComponent, children: [
  {path: '', component: ProductoListaComponent},
  {path: ':id', component: ProductoDetalleComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

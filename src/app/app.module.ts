import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosMainComponent } from './productos-main/productos-main.component';

import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';
import { ProductoComponent } from './productos-main/producto-lista/producto/producto.component';
import { ProductoListaComponent } from './productos-main/producto-lista/producto-lista.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2PaginationModule } from 'ng2-pagination';
import { Routes, RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { ConfirmBorradoComponent } from './confirm-borrado/confirm-borrado.component';
import { HeaderComponent } from './header/header.component';
import { ConfirmChangeComponent } from './confirm-change/confirm-change.component';
import { ProductoCrearComponent } from './producto-crear/producto-crear.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { TiendaMainComponent } from './tienda-main/tienda-main.component';
import { TiendaListaComponent } from './tienda-main/tienda-lista/tienda-lista.component';
import { TiendaItemComponent } from './tienda-main/tienda-lista/tienda-item/tienda-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductosMainComponent,
    ProductoListaComponent,
    ProductoDetalleComponent,
    ProductoEditComponent,
    ModalConfirmComponent,
    ConfirmBorradoComponent,
    HeaderComponent,
    ConfirmChangeComponent,
    ProductoCrearComponent,
    ErrorMessageComponent,
    TiendaMainComponent,
    TiendaListaComponent,
    TiendaItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2PaginationModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule
   
  ],
  entryComponents: [ModalConfirmComponent,
     ConfirmBorradoComponent,
     ProductoEditComponent,
      ConfirmChangeComponent,
       ProductoCrearComponent,
      ErrorMessageComponent],


  exports:[
    RouterModule,
    ModalConfirmComponent,
    ConfirmBorradoComponent,
    ProductoEditComponent,
    ConfirmChangeComponent,
    ProductoCrearComponent,
    ErrorMessageComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

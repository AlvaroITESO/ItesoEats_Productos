import { Component, OnInit, Input } from '@angular/core';
import { Tienda } from 'src/app/tienda';
import { MatDialog } from '@angular/material';
import { ProductoListaComponent } from 'src/app/productos-main/producto-lista/producto-lista.component';
import { ProductoService } from 'src/app/producto.service';
import { TiendaListaComponent } from '../tienda-lista.component';

@Component({
  selector: 'app-tienda-item',
  templateUrl: './tienda-item.component.html',
  styleUrls: ['./tienda-item.component.css']
})
export class TiendaItemComponent implements OnInit {

  @Input() tienda: Tienda;

  constructor(
    public dialog: MatDialog,
    public tiendaLista: TiendaListaComponent,
    public productoservice : ProductoService
  ) { }

  ngOnInit() {
  }

}

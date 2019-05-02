import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { Tienda } from 'src/app/tienda';
import { TiendaService } from 'src/app/tienda.service';

@Component({
  selector: 'app-tienda-lista',
  templateUrl: './tienda-lista.component.html',
  styleUrls: ['./tienda-lista.component.css']
})
export class TiendaListaComponent implements OnInit {
  private subscript: Subscription;
  tiendas=[]

  constructor(private tiendaService: TiendaService,
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog ) { }

  ngOnInit() {
    this.tiendas=this.tiendaService.getTiendas();
    this.subscript = this.tiendaService.cambiaDato.subscribe((tienda: Tienda[]) => {
      this.tiendas = tienda;
    }
  );
  }

}

import { Injectable } from '@angular/core';
import { Tienda } from './tienda';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  cambiaDato = new Subject<Tienda[]>();
  private lastId = 1;

  tiendas: Tienda[] = [
      new Tienda(this.lastId++, 'Capeltic', 'Café y postres', "9:00AM- 4:00PM","https://sifu.unileversolutions.com/image/es-ES/recipe-topvisual/2/1260-709/hamburguesa-new-york-classic-50243210.jpg"),
      new Tienda(this.lastId++, 'Taquería', 'La mejor taquería', "9:00AM- 4:00PM", "https://sifu.unileversolutions.com/image/es-ES/recipe-topvisual/2/1260-709/hamburguesa-new-york-classic-50243210.jpg"),
      new Tienda(this.lastId++, 'Chicanita', 'Buenas hamburguesas', "9:00AM- 4:00PM", "https://sifu.unileversolutions.com/image/es-ES/recipe-topvisual/2/1260-709/hamburguesa-new-york-classic-50243210.jpg")
 
    ]

  
  constructor() { }

  notificarCambios() {
    this.cambiaDato.next(this.tiendas.slice());
  }

  getTiendas(){
  return this.tiendas.slice();
  }
}

import { Component } from '@angular/core';
import { ModuleModule } from '../../auth-module/module/module.module';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  imports: [ModuleModule],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {

  ejercicio3 = {
    producto: null,
    cantidad: null
  }

  resultado = "";

  calcular() {
    let producto = Number(this.ejercicio3.producto);
    let cantidad = Number(this.ejercicio3.cantidad);
    let regalo = "";
    let precio = 0.0;
    let importePagar = 0.0;
    if(producto == 0) {
      this.resultado = "Seleccione El Producto";
    }else if(cantidad <= 0) {
      this.resultado = "Ponga una Cantidad valida";
    }else {
      if(producto == 1) {
        precio = 15.0;
      }else if(producto == 2) {
        precio = 17.5;
      }else {
        precio = 20.0;
      }
  
      if(cantidad >= 1 && cantidad <= 25) {
        regalo = "Un Lapicero";
      }else if(cantidad >= 26 && cantidad <= 50) {
        regalo = "Un Cuaderno";
      }else {
        regalo = "Una Agenda";
      }
  
      importePagar = precio * cantidad;
      this.resultado = "El Importe a Pagar es : " + importePagar.toFixed(2) + "\n"
                        + "El Regalo es : " + regalo;
    }

  }
}

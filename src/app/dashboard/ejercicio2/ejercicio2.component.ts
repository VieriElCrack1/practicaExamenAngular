import { Component } from '@angular/core';
import { ModuleModule } from '../../auth-module/module/module.module';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [ModuleModule],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {


  ejercicio2 = {
    mes : null,
    anio : null
  }

  resultado = "";

  calcular() {
    let mes = Number(this.ejercicio2.mes);
    let anio = Number(this.ejercicio2.anio);
    let vdias = 0;
    let vmes = "";

    if(mes <= 0 && mes > 12) {
      this.resultado = "El mes estar entre 1 y 12";
    } else {
      switch(mes) {
        case 1: 
          vdias = 31;
          vmes = "Enero";
          break;
        case 2:
          vdias = anio%4 == 0 ? 29 : 28;
          vmes = "Febrero";
          break;
        case 3:
          vdias = 31;
          vmes = "Marzo";
          break;
        case 4:
          vdias = 30;
          vmes = "Abril";
          break;
        case 5:
          vdias = 31;
          vmes = "Mayo";
          break;
        case 6:
          vdias = 30;    
          vmes = "Junio";
          break;
        case 7:
          vdias = 31;
          vmes = "Julio";
          break;
        case 8:
          vdias = 31;
          vmes = "Agosto";
          break;
        case 9:
          vdias = 30;
          vmes = "Septiembre";
          break;
        case 10: 
          vdias = 31;
          vmes = "Octubre";
          break;
        case 11:
          vdias = 30;
          vmes = "Noviembre";
          break;
        default:
          vdias = 31;
          vmes = "Diciembre";  
      }
      this.resultado = "La cantidad de dias es : " + vdias + "\n"
                        + "El Nombre del mes es : " + vmes;
    }
  }
}

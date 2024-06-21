import { Component } from '@angular/core';
import { ModuleModule } from '../../auth-module/module/module.module';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [ModuleModule, UpperCasePipe],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {

  ejercicio1 = {
    r : null,
    h : null
  }

  resultado = "";

  calcular() {
    var radio = Number(this.ejercicio1.r);
    var altura = Number(this.ejercicio1.h);
    let pi = 3.14;
    let areabase = pi * radio * 2; 
    let arealateral = 2 * pi * radio * altura;
    let areatotal = 2 * pi * radio * (radio + altura);
    this.resultado = "El Area Base es : " + areabase.toFixed(2) + "\n"
                      + "El Area Lateral es : " + arealateral.toFixed(2) + "\n"
                      + "El Area Total es : " + areatotal.toFixed(2);
  }
}

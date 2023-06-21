import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1!: number;
  num2!: number;
  resultado!: number;
  operaSelect: string = 'suma';

  tipoOperacion= [
    'sumar',
    'restar',
    'multiplicacion',
    'division'
  ];

  calcular() {
    switch (this.operaSelect) {
      case 'sumar':
        this.resultado = this.num1 + this.num2;
        break;
      case 'restar':
        this.resultado = this.num1 - this.num2;
        break;
      case 'multiplicacion':
        this.resultado = this.num1 * this.num2;
        break;
      case 'division':
        this.resultado = this.num1 / this.num2;
        break;
    }
  }
}

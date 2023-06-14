import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs903';
  grupo = 'IDGS903';

  alumnos = {
    matricula: 123,
    nombre: 'Juan',
    fechaNacimiento: new Date(),
    pago: 123.56
  };

  duplicarN(valor: number): number {
    return valor * 2;
  }
}

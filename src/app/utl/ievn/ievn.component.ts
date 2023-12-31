import { Component } from '@angular/core';
import { IAlumnos } from '../alumnos';

@Component({
  selector: 'app-ievn',
  templateUrl: './ievn.component.html',
  styleUrls: ['./ievn.component.css']
})
export class IevnComponent {
  imagenWidth: number = 50;
  imagenMargin: number = 2;
  muestraImg: boolean = true;
  listFilter: string = '';
  
  showImagen(): void {
    this.muestraImg = !this.muestraImg;
  }

  alumnos: IAlumnos[] = [
    { "matricula": 1234, 
      "nombre": 'Mario', 
      "edad": 23, 
      "correo": "mario@gmail.com",
      "pago": 129.42,
      "foto": "https://rinconpsicologia.com/wp-content/uploads/2018/07/personaterca-1024x607.jpg",
      "calif": 5
    },
    { "matricula": 333, 
      "nombre": 'Dario', 
      "edad": 24, 
      "correo": "dario@gmail.com",
      "pago": 2349.9,
      "foto": "https://s3.amazonaws.com/www-inside-design/uploads/2019/03/featureuserpersona-810x810.jpg",
      "calif": 6
    },
    { "matricula": 4321, 
      "nombre": 'Juan', 
      "edad": 20, 
      "correo": "juan@gmail.com",
      "pago": 936.29,
      "foto": "https://i0.wp.com/sonria.com/wp-content/uploads/2016/08/2165947w620.jpg?fit=620%2C348&ssl=1",
      "calif": 3
    },
  ];
}

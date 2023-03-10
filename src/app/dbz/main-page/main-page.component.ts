import { Component } from '@angular/core';
import { Personaje } from '../intefaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent {

  personajes: Personaje[] =[
    {
      nombre: 'Goku',
      poder:  15000 

    },
    {
      nombre: 'Vegeta',
      poder: 7500

    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar( ) {
    if (this.nuevo.nombre.trim().length === 0){
      console.log('no encontrĂ³ datos en nombre');
      return;
    }
    console.log('esto es una prueba');
    console.log(this.nuevo);

     this.personajes.push(this.nuevo)

     this.nuevo = {
      nombre: '',
      poder: 0

     }

  }

  cambiarNombre( event: any){
    console.log( event.target.value );


  }

}

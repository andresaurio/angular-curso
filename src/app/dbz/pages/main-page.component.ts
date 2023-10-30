import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  public Character: Character[]=[{
    name:'Krilin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500

  },{
    name: 'Vegeta',
    power: 10000
  }

  ];

  onNewCharacter (character: Character):void {
    console.log('MainPage');
     console.log(character);

  }

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
      console.log('no encontró datos en nombre');
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

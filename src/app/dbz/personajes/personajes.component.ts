import { Component, Input } from '@angular/core';
import { Personaje } from '../intefaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //Estos personajes van a venir del padre con el decorador @Input
  @Input() personajes: Personaje[] = []

}

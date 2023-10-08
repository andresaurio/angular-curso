import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


//por defecto creó app-list pero como lo tenemos dentro de dbz dejamos app-dbz-list
@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


//clase 61 @Input para traer un atributo de un componente padre
//desde mainpageComponent recibiremos la lista de personajes de la linea 12
//linea 18 @Input() viene con import de @angular/core linea 1
export class ListComponent {


  @Input()
  public characterList: Character[]=[{
    name: 'Trunks',
    power: 10

  }]

}

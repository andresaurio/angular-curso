import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})


// Clase 63 nos enseñana del two way data binding
//enlazado en dos direcciones en este caso para name
//nos dicen que si lo dejamos en ambas direcciones se puede modificar desde
//el form o desde typescript y que esta práctica no es recomendable
export class AddCharacterComponent  {

  //clase 64 utilizamos el decorador @Output() para emitir al padre
  @Output()
  public onNewCharacter: EventEmitter<Character>= new EventEmitter();


 public character: Character={
  name: 'Andres',
  power:0
 }

 emitCharacter():void{
  console.log(this.character);
  if(this.character.name.length === 0) return;

  this.onNewCharacter.emit(this.character);

  this.character.name='';
  this.character.power=0;

 }

}

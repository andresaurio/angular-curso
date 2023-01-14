import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
        <h1> {{titulo}} </h1>
        <h3>La base es : <strong> 55 </strong>></h3>
        <button (click)=" sumar(base)"> + {{ base }}</button>
        
        <span> {{ numero }} </span>
        
        <button (click)=" restar(base)"> - {{ base }}</button>
    `

})
export class ContadorComponent {

    titulo:string = 'Contador App';
  numero:number = 10;
  base  :number = 5;
  sumar(valor: number){
    this.numero +=valor;
  
  }

  restar(valor: number){
    this.numero -=valor;
  
  }

}
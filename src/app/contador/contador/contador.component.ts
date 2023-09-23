import { Component } from '@angular/core';

@Component({

  // el selector dice la forma en que quiero usar el contador
  // desde el selector será llamado en otros componentes mirar el app.component.html principal
  selector: 'app-contador',
  template: `
        <h1> {{titulo}} </h1>
        <h3>La base es : <strong> 55 </strong>></h3>
        <button (click)=" sumar(base)"> + {{ base }}</button>

        <span> {{ numero }} </span>

        <button (click)=" restar(base)"> - {{ base }}</button>
    `

})

// el component le agregó sus caracteristicas a la clase
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

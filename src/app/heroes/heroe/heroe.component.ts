import { Component } from '@angular/core';


@Component({
 selector: 'app-heroes-heroe',
 templateUrl: './heroe.component.html'

})
export class HeroeComponent{
nombre: string = 'Ironman';
edad  : number= 45;
get nombreCapitalizado() {
    return this.nombre.toUpperCase();
}

obtenerNombre(): String{
    this.nombreCapitalizado;
    return `${this.nombre} - ${this.edad}`;
    //la linea de arriba es lo mismo que hacer esto
    //return this.nombre +' - ' + this.edad.toString();
}

cambiarNombre():void{
    this.nombre = 'Spiderman';

}

cambiarEdad(): void {
    this.edad = 30;
}

resetForm():void{
  this.nombre = 'Ironman';
  this.edad = 45;

}

}

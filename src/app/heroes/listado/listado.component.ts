import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent {

    constructor(){
    console.log('Constructor');

  }

  ngOnInit(): void{

    console.log('ngOnInit');
  }

  heroes: string[]= ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  //esta variable es de la clase puedo usarla en cualquier parte
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log ('Borrando...');

    //comando shift elimina el primer elemento de un array
    //comando pop elimina el ultimo elemento de un array
   this.heroeBorrado = this.heroes.pop() ||'';
   console.log ("heroeBorrado", this.heroeBorrado);

   console.table(this.heroes);
  }

}

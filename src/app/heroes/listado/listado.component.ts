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
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log ('Borrando...');

    //comando shift elimina el primer elemento de un array
   this.heroeBorrado = this.heroes.shift() ||'';

  }

}

import { HeroeComponent } from 'src/app/heroes/heroe/heroe.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';


//modulos asocioados a los componentes los módulos siempre van en los imports
@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent,

    ],
    exports: [
        ListadoComponent,
        HeroeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}

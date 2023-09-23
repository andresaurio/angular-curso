import { HeroeComponent } from 'src/app/heroes/heroe/heroe.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';


//modulos asocioados a los componentes
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

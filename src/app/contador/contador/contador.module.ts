import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "src/app/heroes/heroe/heroe.component";
import { ListadoComponent } from "src/app/heroes/listado/listado.component";
import { ContadorComponent } from './contador.component';



//modulos asocioados a los componentes
@NgModule({
    declarations: [

       ContadorComponent
    ],
    exports: [

        ContadorComponent

    ],
    imports: [
        CommonModule
    ]
})
export class ContadorModule{}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';

//Tarea 
//Crear un módulo llamado ContadorModule
//declaraciones y exportaciones

@NgModule({
    declarations: [
        AppComponent,
        
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HeroesModule,
        //  aqui abajo  Importé el modulo de contador
        ContadorModule,

        
       
    ]
})
export class AppModule { }

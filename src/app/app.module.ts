import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { CommonModule } from '@angular/common';


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
        CommonModule,
        BrowserModule,
        HeroesModule,
        //  aqui abajo  Importé el modulo de contador
        ContadorModule,
        DbzModule




    ]
})
export class AppModule { }

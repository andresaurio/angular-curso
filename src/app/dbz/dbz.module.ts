import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// separamos arriba los import de angular y abajo los imports realizados para el proyecto

import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component'
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent,
    ListComponent,
    AddCharacterComponent


  ],
  exports: [
    MainPageComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }

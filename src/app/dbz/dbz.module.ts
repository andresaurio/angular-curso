import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component'



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent,
    ListComponent
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

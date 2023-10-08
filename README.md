# Bases

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Apredizaje de este proyecto:

1. hay una extension que se llama angular dev tool, que sirve para hacer pruebas en desarrollo, funciona unicamente en chrome
2. para incrementar una variable se  da variable +=1 , se incrementa en 1, es lo mismo que escribir variable = variable +1
3. El componente inicial del proyecto es app.module.ts luego app.component.ts(El componente principal) y app.component.html
4. para que los modulos puedan ser llamados  deben de configurarse en el componente app.module.ts , en imports se debe colocar el nombre del módulo que corresponde al nombre de la clase del component.ts mirar cualquier ejemplo de este código
5. la extensión angular snippet ayuda crear nuevo código, le damos por ejemplo a- y el muestra lo que nos puede ayudar a crear
 en el ejemplo se crea un componente nuevo
6. cada carpeta dentro de src es un módulo
7. para crear un componente nuevo se utiliza este comando ng g c heroes/hero  crea el componente hero dentro de la carpeta heroes 
8. Pasos para importar un modulo hijo y verlo en el padre, desde el módulo hijo desde hijo.module.ts se configura lo siguiente: 
    1 - En declaration se coloca  el nombre de la clase del componente hijo.component.ts  
    2 - se pone Export antes de class en hijo.component.ts
    3 - En componente hijo.module.ts en la seccion exports: se coloca el nombre de la clase del componente hijo.component.ts
    4 - en app.component.html principal se coloca el selector del componente hijo hijo.component.ts
    5 - En el app.module.ts del padre se coloca en el import el nombre de la clase hijo a llamar que viene a ser el nombre de la 
        clase del componente hijo.module.ts
    6 - finalmente al compilar debería verse el nuvo modulo en pantalla   

9. se pueden crear pequeños componentes dentro de otros     
   componentes, en la carpeta donde deseemos crear el      
   componente en este caso dbz/components se da clic derecho se    
   da el nombre del componente y el sistema crea component.ts, 
  spec.ts , component.html, component.css    

10. Los componentes tipo component.spec.ts son para pruebas    








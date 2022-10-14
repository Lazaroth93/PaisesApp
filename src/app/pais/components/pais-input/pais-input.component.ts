import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import {  Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
 

  @Output() onEnter: EventEmitter<string>= new EventEmitter(); //evento especificamos de que tipo es
  @Output() onDebounce : EventEmitter<string>= new EventEmitter(); //On debounce se va a disparar cuando el usuario deja de escribir4 en el input
  

  @Input() placeholder: string= '';
  debouncer: Subject<string> = new Subject(); // es un observable l outilizamos para saber cuando el usuario deja de escribir

  termino: string = '';

  ngOnInit(){ //ng onInit se dispara solamante una vez cuando el componente es creado
   this.debouncer
   .pipe(// pipe es como una conexion a una mnnguera que te permite ctransformar la salida de la informacion 
     debounceTime(300) )//le decimos cuantas milesimas de segundos queremos esperar hasta que se emita el siguiente valor  
   .subscribe( termino =>{//nos subscribimos al dbouncer 
    this.onDebounce.emit(termino);
    // una vez se espera el tiempo marcado en debounceTime se dispara 
   });
  }
  


//buscar esta emitiendo on enter(el valor) el cual desde por-paiscomponent 
//html estoy escuchando y cuando se escuche el evento se dispara buscar

  buscar() { //creamos la funcion para emitir this.termino con los valores de la API
   this.onEnter.emit(this.termino);
  
  }

  teclaPresionada( event: any ){//llamamos al dbouncer para emitir un valor
    this.debouncer.next( this.termino);
  }



}

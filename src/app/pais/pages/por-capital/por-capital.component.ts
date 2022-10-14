import { Component, } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {


  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }


  buscar ( termino: string) {

    this.hayError = false; // hacemos la comprobacion justo cuando se hace enter en el input 
    this.termino  = termino;
    

    this.paisService.buscarCapital ( termino )
    .subscribe( (paises) => {
      this.paises = paises;


      
     

    }, ( err) => {
      this.hayError = true;// manejamos el error en caso de que la informacion delinput no retorne respuesta de la api
      this.paises   = [];

    });
  }


  
  }

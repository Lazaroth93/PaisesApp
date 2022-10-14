import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService
    ) { } //vamos a escuchar los cambios en la url 

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( (param) => this.PaisService.getPaisPorAlpha (param["id"])),
      tap( console.log)
    )
    .subscribe( pais => this.pais = pais);
   




  }
   
}
//this.activatedRoute.params
//.subscribe( ({ id }) => {
 //console.log(id);
 //tap(console.log)

 // this.PaisService.getPaisPorAlpha (id)
//.subscribe( pais =>{
  //  console.log(pais);
 // });
//});
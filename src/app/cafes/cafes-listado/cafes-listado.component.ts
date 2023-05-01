import { Component, Inject, OnInit, inject } from '@angular/core';
import { CafesService } from '../services/cafes.service';
import { Cafe } from '../models/cafe.class';

@Component({
  selector: 'cafes-listado',
  templateUrl: '../cafes-listado/cafes-listado.component.html',
  styleUrls: ['./cafes-listado.component.scss'],
})
export class ListadoCafesComponent implements OnInit {

  cafeService: CafesService = inject(CafesService);
  cafeList:Cafe[]=[];
  totalCafeBlend:number=0;
  totalCafeOrigen:number=0;

  constructor(){}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((cafes)=>{
      if(cafes){
        this.cafeList=cafes;
        this.totalCafeBlend=cafes.filter((c)=>c.tipo==='Blend').length;
        this.totalCafeOrigen=cafes.filter((c)=>c.tipo==='Café de Origen').length;
      }
    })
  }
}

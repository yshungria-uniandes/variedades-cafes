import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCafesComponent } from './cafes-listado/cafes-listado.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    ListadoCafesComponent
  ],
  exports:[
    ListadoCafesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CafesModule { }

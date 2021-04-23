import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeDetalhesComponent } from './home-detalhes/home-detalhes.component';

@NgModule({
  declarations: [HomeComponent, HomeDetalhesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ],
  exports: [HomeComponent, HomeDetalhesComponent]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HarrypotterRoutingModule } from './harrypotter-routing.module';
import { HarrypotterComponent } from './harrypotter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HarrypotterComponent
  ],
  imports: [
    CommonModule,
    HarrypotterRoutingModule,
    FormsModule
  ]
})
export class HarrypotterModule { }

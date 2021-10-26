import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontsRoutingModule } from './fonts-routing.module';
import { FontsHomeComponent } from './fonts-home/fonts-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FontsHomeComponent
  ],
  imports: [
    CommonModule,
    FontsRoutingModule,
    SharedModule
  ]
})
export class FontsModule { }

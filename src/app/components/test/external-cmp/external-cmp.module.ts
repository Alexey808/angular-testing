import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalCmpComponent } from './external-cmp.component';



@NgModule({
  declarations: [
    ExternalCmpComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ExternalCmpComponent,
  ]
})
export class ExternalCmpModule { }

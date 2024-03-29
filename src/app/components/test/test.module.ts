import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { InternalCmpComponent } from './internal-cmp/internal-cmp.component';
import { ExternalCmpModule } from './external-cmp/external-cmp.module';
import { TestttComponent } from './testtt/testtt/testtt.component';


@NgModule({
  declarations: [
    TestComponent,
    InternalCmpComponent,
    TestttComponent,
  ],
  imports: [
    CommonModule,
    ExternalCmpModule,
  ],
  exports: [
    TestComponent,
  ]
})
export class TestModule { }

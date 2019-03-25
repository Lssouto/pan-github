import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize/capitalize.pipe';
import { OrderByPipe } from './order-by/order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CapitalizePipe,
    OrderByPipe
  ],
  exports: [
    CapitalizePipe,
    OrderByPipe,
  ],
})
export class PipesModule { }

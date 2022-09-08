import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuGralComponent } from './menu-gral/menu-gral.component';
import { PieGralComponent } from './pie-gral/pie-gral.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    MenuGralComponent,
    PieGralComponent,
    SpinnerComponent
  ],
  exports:[
    MenuGralComponent,
    PieGralComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

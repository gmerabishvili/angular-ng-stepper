import {NgModule} from '@angular/core';
import {NgStepperComponent} from './ng-stepper.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [NgStepperComponent],
  imports: [
    CommonModule,
    CdkStepperModule
  ],
  exports: [NgStepperComponent]
})
export class NgStepperModule {
}

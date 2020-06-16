import {NgModule} from '@angular/core';
import {NgStepperComponent} from './ng-stepper.component';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NgStepperComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CdkStepperModule
  ],
  exports: [NgStepperComponent]
})
export class NgStepperModule {
}

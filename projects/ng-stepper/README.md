# Angular Stepper
* See [Demo](https://gmerabishvili.github.io/angular-ng-stepper/) or try in [Stackblitz](https://stackblitz.com/edit/angular-ng-stepper)


Table of contents
=================

  * [Description](#description)
  * [Getting started](#getting-started)
  * [Usage](#usage-sample)
  * [API](#api)

## Description
The ng-stepper is a simple wizard/stepper component for Angular which is built on top of [Angular CDK Stepper](https://material.angular.io/cdk/stepper/overview).

## Getting started
### Step 1: Install `@angular/cdk`:
### Step 2: Install `angular-ng-stepper`:

#### NPM
```shell
npm i @angular/cdk
npm i angular-ng-stepper
```
### Step 3: Import the CdkStepperModule:
### Step 4: Import the NgStepperModule:
```js
import {CdkStepperModule} from '@angular/cdk/stepper';
import {NgStepperModule} from 'ng-stepper';

@NgModule({
  declarations: [AppComponent],
  imports: [CdkStepperModule,NgStepperModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```
### Usage sample

```html
 <ng-stepper #cdkStepper [linear]="true">
 
    <cdk-step [stepControl]="stepOne.stepOneForm" [optional]="false">
      <ng-template cdkStepLabel>
        <div class="step-bullet">1</div>
        <div class="step-title">Personal Details <span class="required">*</span></div>
      </ng-template>
      <app-step-one #stepOne></app-step-one>
    </cdk-step>
    
    <cdk-step [stepControl]="stepTwo.stepTwoForm" [optional]="true">
      <ng-template cdkStepLabel>
        <div class="step-bullet">2</div>
        <div class="step-title">Address</div>
      </ng-template>
      <app-step-two #stepTwo></app-step-two>
    </cdk-step>
    
 </ng-stepper>

```
### API
Angular-ng-stepper uses Angular CDK API. For the full documentation you can refer to [here](https://material.angular.io/cdk/stepper/api)

## Support Angular ng-stepper!
If you do love angular-ng-stepper I would appreciate a donation :)

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif)](https://paypal.me/gmerabishvili?locale.x=en_US)


### Author
* [Giorgi Merabishvili](https://www.linkedin.com/in/giorgi-merabishvili-3719a2121/)


## License

MIT



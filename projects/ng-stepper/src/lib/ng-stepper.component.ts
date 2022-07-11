import {Component, OnInit} from '@angular/core';
import {CdkStepper, STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ng-stepper',
  templateUrl: './ng-stepper.component.html',
  styleUrls: ['./ng-stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: NgStepperComponent}, {
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }],
  animations: [trigger('stepTransition', [
    state('previous', style({transform: 'translateX(-100%)', opacity: 0})),
    state('current', style({transform: 'translateX(0)', opacity: 1})),
    state('next', style({transform: 'translateX(100%)', opacity: 0})),
    transition(':enter', animate(0)),
    transition('previous => current', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
    transition('next => current', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
  ])]
})
export class NgStepperComponent extends CdkStepper implements OnInit {
  ngOnInit(): void {
  }
}

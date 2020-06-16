import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {
  public stepThreeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.stepThreeForm = this.fb.group({
      cardNumber: this.fb.control('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  stepThreeSubmit() {
  }
}

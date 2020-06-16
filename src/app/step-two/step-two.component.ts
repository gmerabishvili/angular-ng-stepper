import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {
  public stepTwoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.stepTwoForm = this.fb.group({
      city: this.fb.control(''),
      country: this.fb.control('')
    });
  }

  ngOnInit(): void {
  }

  stepTwoSubmit() {
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData: any;
  myForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[A-Za-z]*$')]],
      email: ['', [Validators.required, Validators.email]],
      numericField: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });

    // Subscribe to statusChanges observable of firstName control

  }


  onSubmit() {
    this.formData = this.myForm.value; // store the form data in a property
    this.myForm.reset(); 
  }



  showFirstNameAlert = false;

  checkFirstNameValidity() {
    const firstNameControl = this.myForm.get('firstName');
    if (firstNameControl) {
      this.showFirstNameAlert = firstNameControl.invalid && /\d|[^\w\s]/.test(firstNameControl.value);
    }
  }

  showNumericFieldAlert = false;

  checkNumberValidity() {
    const numericFieldControl = this.myForm.get('numericField');
    if (numericFieldControl) {
      this.showNumericFieldAlert = numericFieldControl.invalid && /[^0-9]/.test(numericFieldControl.value)
    }
  }
}

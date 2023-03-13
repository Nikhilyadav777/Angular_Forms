/* import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render first name input', () => {
    const firstNameInput = fixture.debugElement.query(By.css('#firstName'));
    expect(firstNameInput).toBeTruthy();
  });

  it('should require first name input', () => {
    const firstNameInput = component.myForm.controls['firstName'];
    firstNameInput.setValue('');
    expect(firstNameInput.valid).toBeFalsy();
  });

  it('should validate first name input', () => {
    const firstNameInput = component.myForm.controls['firstName'];
    firstNameInput.setValue('1234');
    expect(firstNameInput.valid).toBeFalsy();
  });

  it('should render email input', () => {
    const emailInput = fixture.debugElement.query(By.css('#email'));
    expect(emailInput).toBeTruthy();
  });

  it('should require email input', () => {
    const emailInput = component.myForm.controls['email'];
    emailInput.setValue('');
    expect(emailInput.valid).toBeFalsy();
  });

  it('should validate email input', () => {
    const emailInput = component.myForm.controls['email'];
    emailInput.setValue('invalid-email');
    expect(emailInput.valid).toBeFalsy();
  });

  it('should render numeric field input', () => {
    const numericFieldInput = fixture.debugElement.query(By.css('#numericField'));
    expect(numericFieldInput).toBeTruthy();
  });

  it('should require numeric field input', () => {
    const numericFieldInput = component.myForm.controls['numericField'];
    numericFieldInput.setValue('');
    expect(numericFieldInput.valid).toBeFalsy();
  });

  it('should validate numeric field input', () => {
    const numericFieldInput = component.myForm.controls['numericField'];
    numericFieldInput.setValue('abc');
    expect(numericFieldInput.valid).toBeFalsy();
  });
});

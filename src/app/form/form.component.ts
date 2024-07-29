import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form!: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.CreatForm();
  }

  CreatForm() {

    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]*$')]],
      middleName: [''],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})/), Validators.minLength(10), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      gender: ['', Validators.required],
      address: [''],
      city: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern('^[a-zA-Z]*$')]],
      state: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern('^[a-zA-Z]*$')]],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    }, {
      validators: this.passwordMatchValidator
    });

  }

  passwordMatchValidator(form: FormGroup): ValidationErrors | null {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? { mismatch: false } : { mismatch: true };
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
    } else {
      this.form.markAllAsTouched();
    }
  }
}

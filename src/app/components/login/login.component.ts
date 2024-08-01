import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: FormGroup | any;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  constructor(private fb: FormBuilder) { }
 

  ngOnInit() {
    this.CreatForm();
  }

  CreatForm() {

    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],

    }

    )}



    onSubmit() {
    
      if (this.login.valid) {
        console.log(this.login.value);
      } else {
        this.login.markAllAsTouched();
        
      }
    }

  }

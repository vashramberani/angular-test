import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AppServiceService } from '../service/app-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signup:FormGroup;
  validationError: string = "";
  constructor(private sign: FormBuilder, public appSer: AppServiceService) {
    this.signup = this.sign.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      birthdate: ['', [Validators.required]],
      flatPurchaseDate: ['', [Validators.required]],
      flatBlock: ['', [Validators.required]],
      flatNumber: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]]
    });
   }

  signUp() {
    console.log(this.signup.controls['password'].value);
    if (this.signup.controls['firstName'].hasError('required')) {
      this.validationError ="Enter first name";
    } else if (this.signup.controls['lastName'].hasError('required')) {
      this.validationError ="Enter last name";
    } else if (this.signup.controls['email'].hasError('required')) {
      this.validationError ="Enter email";
    } else if (this.signup.controls['email'].hasError('pattern')) {
     this.validationError ="Enter valid email";
    } else if (this.signup.controls['password'].hasError('required')) {
     this.validationError ="Enter password";
    } else if (this.signup.controls['password'].hasError('pattern')) {
     this.validationError ="At-least 1 Capital, At-least 1 number, At-least 1 special char";
    } else if (this.signup.controls['password'].value != this.signup.controls['confirmPassword'].value) {
     this.validationError ="Confirm password dose not match";
    } else if (this.signup.controls['flatBlock'].hasError('required') ||this.signup.controls['flatBlock'].hasError('pattern')) {
     this.validationError ="Enter valid flat block";
    } else if (this.signup.controls['flatNumber'].hasError('required')) {
     this.validationError ="Enter flat number";
    } else if (this.signup.controls['mobileNo'].hasError('required')) {
     this.validationError ="Enter mobileNo";
    } else {
      this.validationError ="";
    }

    let data = {
      firstName: this.signup.controls['firstName'].value,
      lastName: this.signup.controls['lastName'].value,
      email: this.signup.controls['email'].value,
      password: this.signup.controls['password'].value,
      birthdate: this.signup.controls['birthdate'].value,
      flatPurchaseDate: this.signup.controls['flatPurchaseDate'].value,
      flatBlock: this.signup.controls['flatBlock'].value,
      flatNumber: this.signup.controls['flatNumber'].value,
      mobileNo: this.signup.controls['mobileNo'].value
    };
    this.appSer.signup(data).subscribe((res)=>{
      console.log(res);
    });

  }


}

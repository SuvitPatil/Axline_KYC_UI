import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  public verifyNo = false;
  public validNumber = false;

  constructor(
    private _formBuilder: FormBuilder,
    public toaster: ToastrService
    ) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: [''],
      lastname: [''],
      dateofBirth: [''],
      email: [''],
      address1: [''],
      address2: [''],
      city: [''],
      country: [''],
      postalCode: [''],
    });
    this.secondFormGroup = this._formBuilder.group({
      phoneNo: [''],
      vCode: ['']
    });
    this.thirdFormGroup = this._formBuilder.group({
      passport: [''],
      drivingL: ['']
    });
  }

  sendVerifyCode(e: any): void {
    this.verifyNo = true;
    alert(this.secondFormGroup.controls.phoneNo.value);
  }
  resendVerifyCode(e: any): void {
    alert('Verification Code is: 123');
  }
  verifyCode(e: any): void {
    debugger;
    this.validNumber = this.secondFormGroup.controls.vCode.value === '123' ? true : false;
    if (this.validNumber) {
      alert('Successfully Verified Phone Number');
    } else {
      alert('Verification Failed Please Try Again');
    }
  }
}

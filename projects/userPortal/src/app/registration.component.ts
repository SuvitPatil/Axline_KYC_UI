import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { UserRegistrationService } from "./user-portal/shared/appServices/user-registration.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.sass"]
})
export class RegistrationComponent implements OnInit {
  public langchangebtn: string;
  public hide = true;
  public modalRef: BsModalRef;
  public registrationUserDetails: any;
  langs = [
    { value: "en", viewValue: "English" },
    { value: "zh-cn", viewValue: "简体中文）" },
    { value: "zh-tw", viewValue: "中國傳統的）" }
  ];
  registrationForm = this.fb.group({
    userEmail: ["", Validators.email],
    password: ["", Validators.required],
    confirmPassword: ["", Validators.required]
  });

  constructor(
    public router: Router,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private registrationService: UserRegistrationService,
    private translate: TranslateService
  ) {
    this.langchangebtn = "English";
    translate.setDefaultLang("en");
  }

  ngOnInit() { }
  switchLanguage(language: any) {
    this.translate.use(language);
    if (language === "en") {
      this.langchangebtn = "English";
    }
    if (language === "zh-cn") {
      this.langchangebtn = "简体中文）";
    }
    if (language === "zh-tw") {
      this.langchangebtn = "中國傳統的）";
    }
  }
  public backToSignIn(e: any): void {
    this.router.navigate(["/login"]);
  }

  public registerMe(e: any, template: TemplateRef<any>) {
    if (
      this.registrationForm.valid &&
      this.registrationForm.controls.password.value ===
      this.registrationForm.controls.confirmPassword.value
    ) {
      const data = {
        username: this.registrationForm.controls.userEmail.value,
        orgName: "Org1",
        password: this.registrationForm.controls.password.value,
        status: "InActive"
      };
      this.registrationUserDetails = data;
      this.registrationService.registerUser(data).subscribe(res => {
        if (res.success) {
          this.openModal(template);
        }
      });
    }
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public verifyOTP(e: any, emaiOTP: any): void {
    if (emaiOTP) {
      const verifyOTPData = {
        username: this.registrationUserDetails.username,
        pin: emaiOTP.value,
        password: this.registrationUserDetails.password
      }
      this.registrationService.verifyUserEmailOTP(verifyOTPData).subscribe(res => {
        if (res.success) {
          //console.log(res);
           this.modalRef.hide();
           this.router.navigate(["/login"]);
        }
      });
      
    }
  }
}

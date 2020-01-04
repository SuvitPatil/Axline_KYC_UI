import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public message: string;
  public langchangebtn: string;
  public hide = true;
  public selected = 'en';
  langs = [
    { value: 'en', viewValue: 'English' },
    { value: 'zh-cn', viewValue: '简体中文）' },
    { value: 'zh-tw', viewValue: '中國傳統的）' }
  ];

  loginUserForm = this.fb.group({
    userID: ['',  Validators.required],
    userPassword: ['',  Validators .required]
  });

  constructor(
    public authService: AuthService,
    public router: Router,
    private translate: TranslateService,
    private fb: FormBuilder
  ) {
    this.langchangebtn = 'English';
    this.setMessage();
    translate.setDefaultLang('en');
  }

  ngOnInit() {}

  switchLanguage(language: any) {
    this.translate.use(language);
    if (language === 'en') {
      this.langchangebtn = 'English';
    }
    if (language === 'zh-cn') {
      this.langchangebtn = '简体中文）';
    }
    if (language === 'zh-tw') {
      this.langchangebtn = '中國傳統的）';
    }
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  public login() {
    const data = {
      username: this.loginUserForm.controls.userID.value,
      password: this.loginUserForm.controls.userPassword.value,
      orgName: 'Org1'
    };

    this.authService.login(data).subscribe(res => {
      if (res.success) {
        this.authService.isLoggedIn = true;
        this.router.navigate(['/editProfile']);
      }
    });
  }

  public logout() {
    this.authService.logout();
    this.setMessage();
  }

  public registration(e: any): void {
    this.router.navigate(['/newUser']);
  }
}

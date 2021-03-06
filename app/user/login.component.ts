import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
  `]
})
export class LoginComponent {
  loginInvalid: boolean = false;
  public mouseoverLogin: boolean = false;
  public userName: string;
  public password: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  login(formValues: any) {
    this.authService.login(formValues.userName, formValues.password).subscribe(response => {
      if (!response) {
        this.loginInvalid = true;
      } else {
        this.router.navigate(['']);
      }
    });
  }

  cancel() {
    this.router.navigate(['']);
  }
}

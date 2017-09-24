import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'login',
  templateUrl: 'app/user/login.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
  `]
})
export class LoginComponent {
  constructor(private authService: AuthService,
    private router: Router) { }

  login(formValues: any) {
    this.authService.login(formValues.userName, formValues.password);
    this.router.navigate(['']);
  }

  cancel() {
    this.router.navigate(['']);
  }
}

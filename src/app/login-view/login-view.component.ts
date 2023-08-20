import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {
  isRegisterPage = false;

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authService: AuthService, private state: AppStateService){}

  onSubmit(e: Event) {
    e.preventDefault();
    this.authService.login(this.form.getRawValue())
      .subscribe(res => {
        this.state.setToken(res.token)
        if (res.isAdmin) this.state.setAdmin()
      }, err => this.state.setError(err.message))
  }
}

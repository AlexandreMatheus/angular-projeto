import {Component, OnDestroy, OnInit} from '@angular/core';
import { TokenPayload, AuthenticationService } from 'src/app/services/Authentication.service';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  credentials: TokenPayload = {
    id: 0,
    name: '',
    email: '',
    password: ''
  }

  reloader = false;
  constructor(private auth: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    $('body').addClass('hold-transition login-page');
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/');
      },
      err => {
        console.log(err);
      }
    )
  }
}

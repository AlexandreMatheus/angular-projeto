import {Component, OnDestroy, OnInit} from '@angular/core';
import { TokenPayload, AuthenticationService } from 'src/app/services/Authentication.service';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  credentials: TokenPayload = {
    id: 0,
    name: '',
    email: '',
    password: ''
  }

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

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/');
      },
      err => {
        console.log(err);
      }
    )
  }

}

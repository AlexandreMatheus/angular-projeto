import {Component, OnInit} from '@angular/core';
import { AuthenticationService } from 'src/app/services/Authentication.service';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  user;

  constructor(private auth:AuthenticationService, private router: Router) {
    if (auth.isLoggedIn()) {
      this.auth.profile().toPromise().then(result =>{ this.user = result;});
    }
  }

  ngOnInit() {
    $(document).ready(() => {
      $('.sidebar-menu').tree();
    });
  }

  redirect()
  {
    this.router.navigateByUrl('/login');
  }
}

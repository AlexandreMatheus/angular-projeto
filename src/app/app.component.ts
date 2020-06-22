import { Component } from '@angular/core';
import { AuthenticationService } from './services/Authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AdminLTE';

  constructor (public auth: AuthenticationService) {}
}

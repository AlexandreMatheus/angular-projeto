import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {SettingsComponent} from './settings/settings.component';

import { AuthenticationService } from '../../services/Authentication.service';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    SettingsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    SettingsComponent
  ],
  providers: [
    AuthenticationService
  ]
})
export class LayoutModule {
}

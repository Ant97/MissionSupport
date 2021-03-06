import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MyDatePickerModule } from 'mydatepicker';
import { GMapsService } from './services/google-maps.service';
import { FullCalendarModule } from 'ng-fullcalendar';

import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages/module';
import { AuthGuard } from './guards/auth.guard';
import { SitesComponent } from './components/sites/sites.component';
import { ResetComponent } from './components/reset/reset.component';
import { AdminComponent } from './components/admin/admin.component';
import { EventsComponent } from './components/events/events.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},
    {path: 'sites', component: SitesComponent},
    {path: 'reset', component: ResetComponent},
    {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
    {path: 'admin', component: AdminComponent, canActivate:[AuthGuard]},
    {path: 'about', component: AboutComponent},
    {path: 'events', component: EventsComponent}
]

const googleMapsCore = AgmCoreModule.forRoot({
  apiKey: 'AIzaSyBMto85RZ4EaO9BeXqTQYaGL6tCIIlb8JM',
});

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ProfileComponent,
    FooterComponent,
    AboutComponent,
    SitesComponent,
    ResetComponent,
    AdminComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    googleMapsCore,
    MyDatePickerModule,
    FullCalendarModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, GMapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/admin/components/footer/footer.component';
import { HeaderComponent } from './components/admin/components/header/header.component';
import { HomeComponent } from './components/admin/components/home/home.component';
import { ContactsComponent } from './components/admin/components/contacts/contacts.component';
import { ContactDetailsComponent } from './components/admin/components/contact-details/contact-details.component';
import { AdminDashboardComponent } from './components/admin/components/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactsComponent,
    ContactDetailsComponent,
    AdminDashboardComponent,
    LoginComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

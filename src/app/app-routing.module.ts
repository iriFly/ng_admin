
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin/components/admin-dashboard/admin-dashboard.component';
import { ContactDetailsComponent } from './components/admin/components/contact-details/contact-details.component';
import { ContactsComponent } from './components/admin/components/contacts/contacts.component';
import { HomeComponent } from './components/admin/components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'admin',
 loadChildren: () => import('./components/admin/admin.module').then((m) => m.AppModule)},
 {path: '**', component: NotFoundComponent},

  // path: '', component: AdminDashboardComponent,
  // children: [
  //   {path: 'contacts', component: ContactsComponent},
  //   {path: 'contacts/user/:id', component: ContactDetailsComponent},
  //   {path: 'contacts/user', redirectTo: 'contacts', pathMatch: 'full'},
  //   {path: 'home', component: HomeComponent},
  //   {path: '', redirectTo: 'home', pathMatch: 'full'},
  // ],
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  {path: '', component: AdminDashboardComponent,
  children: [
  {path: 'contacts', component: ContactsComponent  },
  {path: 'contacts/user/:id', component: ContactDetailsComponent, resolve: {
    user: UserResolver
  }
},
  {path: 'home', component: HomeComponent  },
  {path: '', redirectTo: 'home', pathMatch: 'full' },

  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

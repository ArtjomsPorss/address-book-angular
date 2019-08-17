import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookEntriesComponent } from "./address-book-entries/address-book-entries.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EntryDetailComponent } from "./entry-detail/entry-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'entries', component: AddressBookEntriesComponent },
  { path: 'details/:id', component: EntryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

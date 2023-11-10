import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './components/body/body.component';
import { ClientDetailComponent } from './components/client-detail/client-detail.component';
import { ClientComponent } from './components/client/client.component';
import { GenericDetailComponent } from './components/generic-detail/generic-detail.component';
import { TransactionComponent } from './components/transactions/transaction.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'clients/:id', component: ClientDetailComponent },
  { path: 'transactions/:id', component: GenericDetailComponent },
  { path: 'transactions', component: TransactionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

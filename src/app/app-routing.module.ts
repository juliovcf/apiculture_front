import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './components/body/body.component';
import { ClientComponent } from './components/client/client.component';
import { TransactionComponent } from './components/transactions/transaction.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'transactions', component: TransactionComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

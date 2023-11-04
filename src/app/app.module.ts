import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { ClientComponent } from './components/client/client.component';
import { CreateClientFormComponent } from './components/create-client-form/create-client-form.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TransactionComponent } from './components/transactions/transaction.component';
import { DetalleModalComponent } from './detalle-modal/detalle-modal.component';
import { CreateTransactionFormComponent } from './components/create-transaction-form/create-transaction-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    BodyComponent,
    ClientComponent,
    DetalleModalComponent,
    TransactionComponent,
    CreateClientFormComponent,
    CreateTransactionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

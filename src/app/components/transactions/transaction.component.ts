import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResponseObject } from 'src/app/models/responseObject.model';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';
import Utils from 'src/app/utils/parser.utils';
import { CreateTransactionFormComponent } from '../create-transaction-form/create-transaction-form.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  objectList: Transaction[] = [];

  constructor(private service: TransactionService, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.service.get().subscribe({
      next: (responseObject: ResponseObject) => this.objectList = Utils.parseArrayData(responseObject),
      error: (error: any) => console.error(error)
    });
  }

  abrirFormularioCreacion() {
    this.modalService.open(CreateTransactionFormComponent);
  }
}

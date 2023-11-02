import { Component } from '@angular/core';
import { ResponseObject } from 'src/app/models/responseObject.model';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';
import Utils from 'src/app/utils/parser.utils';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  objectList: Transaction[] = [];

  constructor(private service: TransactionService) {

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
}

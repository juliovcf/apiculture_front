import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ResponseObject } from 'src/app/models/responseObject.model';
import Utils from 'src/app/utils/parser.utils';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  objectList: Client[] = [];

  constructor(private service: ClientService) {

  }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.service.get().subscribe({
      next: (responseObject: ResponseObject) => this.objectList = Utils.parseArrayData(responseObject),
      error: (error: any) => console.error(error)
    });
  }

}

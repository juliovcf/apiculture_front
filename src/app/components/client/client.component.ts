import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/models/client.model';
import { ResponseObject } from 'src/app/models/responseObject.model';
import Utils from 'src/app/utils/parser.utils';
import { ClientService } from '../../services/client.service';
import { CreateClientFormComponent } from '../create-client-form/create-client-form.component';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  objectList: Client[] = [];

  constructor(private service: ClientService, private modalService: NgbModal) {

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

  abrirFormularioCreacion() {
    this.modalService.open(CreateClientFormComponent);
  }

}

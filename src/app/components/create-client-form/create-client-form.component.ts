import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Nationality } from 'src/app/models/nationality.model';
import { ResponseObject } from 'src/app/models/responseObject.model';
import { Status } from 'src/app/models/status.model';
import { NationalityService } from 'src/app/services/nationality.service';
import { StatusService } from 'src/app/services/status.service';
import Utils from 'src/app/utils/parser.utils';

@Component({
  selector: 'app-cerate-client-form',
  templateUrl: './create-client-form.component.html',
  styleUrls: ['./create-client-form.component.css']
})
export class CreateClientFormComponent {
  crearUsuario() {
    throw new Error('Method not implemented.');
  }

  nationalities: Nationality[] = [];
  status: Status[] = [];
  activeModal: any;

  constructor(private nationalityService: NationalityService, private modalService: NgbModal, private statusService: StatusService) {

  }

  ngOnInit() {
    this.getNationalities();
    this.getStatus();
  }

  getNationalities() {
    this.nationalityService.get().subscribe({
      next: (responseObject: ResponseObject) => this.nationalities = Utils.parseArrayData(responseObject),
      error: (error: any) => console.error(error)
    });
  }

  getStatus() {
    this.statusService.get().subscribe({
      next: (responseObject: ResponseObject) => this.status = Utils.parseArrayData(responseObject),
      error: (error: any) => console.error(error)
    });
  }

  abrirFormularioCreacion() {
    this.modalService.open(CreateClientFormComponent);
  }

}

import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/models/client.model';
import { Nationality } from 'src/app/models/nationality.model';
import { ResponseObject } from 'src/app/models/responseObject.model';
import { Status } from 'src/app/models/status.model';
import { ClientService } from 'src/app/services/client.service';
import { NationalityService } from 'src/app/services/nationality.service';
import { StatusService } from 'src/app/services/status.service';
import Utils from 'src/app/utils/parser.utils';

@Component({
  selector: 'app-cerate-client-form',
  templateUrl: './create-client-form.component.html',
  styleUrls: ['./create-client-form.component.css']
})
export class CreateClientFormComponent {

  socio: Client = {
    id: 0,
    name: '',
    surname: '',
    nationality: { id: 173, name: 'Español' }
  };
  nationalities: Nationality[] = [];
  status: Status[] = [];

  constructor(public activeModal: NgbActiveModal, private nationalityService: NationalityService, private modalService: NgbModal, private statusService: StatusService, private clientService: ClientService) {

  }

  ngOnInit() {
    this.getNationalities();
    this.getStatus();
  }

  guardarSocio() {
    this.clientService.create(this.socio).subscribe(
      (response) => {
        console.log('Socio creado con éxito', response);
        this.activeModal.close('success');
      },
      (error) => {
        console.error('Ocurrió un error al crear el socio:', error);
      }
    );
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

import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Nationality } from 'src/app/models/nationality.model';
import { ResponseObject } from 'src/app/models/responseObject.model';
import { NationalityService } from 'src/app/services/nationality.service';
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
  activeModal: any;

  constructor(private service: NationalityService, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.getNationalities();
  }

  getNationalities() {
    this.service.get().subscribe({
      next: (responseObject: ResponseObject) => this.nationalities = Utils.parseArrayData(responseObject),
      error: (error: any) => console.error(error)
    });
  }

  abrirFormularioCreacion() {
    this.modalService.open(CreateClientFormComponent);
  }

}

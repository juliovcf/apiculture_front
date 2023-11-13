import { Location } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { Nationality } from 'src/app/models/nationality.model';
import { ResponseObject } from 'src/app/models/responseObject.model';
import { Status } from 'src/app/models/status.model';
import { ClientService } from 'src/app/services/client.service';
import { StatusService } from 'src/app/services/status.service';
import Utils from 'src/app/utils/parser.utils';
import { NationalityService } from '../../services/nationality.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  editMode = false;
  object!: Client;
  nationalities: Nationality[] = [];
  status: Status[] = [];

  @ViewChild('clientDetailTemplate', { static: true }) clientDetailTemplate!: TemplateRef<any>;

  constructor(private service: ClientService, private route: ActivatedRoute, private location: Location, private nationalityService: NationalityService, protected statusService: StatusService) {

  }

  ngOnInit(): void {
    this.getNationalities();
    this.getStatus();
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getClient(parseInt(id));
      }
    });
  }

  getClient(id: number) {
    console.log('getClient()');
    this.service.getById(id).subscribe({
      next: (responseObject: ResponseObject) => this.object = responseObject.data as Client,
      error: (error: any) => console.error(error)
    });
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

  toggleEditMode() {
    if (this.editMode) {
      // Si estamos en modo de edición, guarda los cambios
      this.saveChanges();
      this.editMode = false; // Salir del modo de edición
    }
    this.editMode = !this.editMode;
  }

  saveChanges(): void {
    // Llama al método del servicio para guardar los cambios
    this.service.update(this.object.id, this.object).subscribe({
      next: (responseObject: ResponseObject) => {
        // Manejo si el guardado fue exitoso
        console.log('Cambios guardados', responseObject);
      },
      error: (error: any) => {
        // Manejo si hubo un error al guardar
        console.error('Error al guardar los cambios:', error);
      }
    });
  }

  closeDetails() {
    this.location.back();
  }
}

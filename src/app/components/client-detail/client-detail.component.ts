import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ResponseObject } from 'src/app/models/responseObject.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  client!: Client;

  constructor(
    private route: ActivatedRoute,
    private service: ClientService
  ) { }

  ngOnInit() {
    const objectId = this.route.snapshot.paramMap.get('id');
    if (objectId) {
      this.service.getById(+objectId).subscribe({
        next: (responseObject: ResponseObject) => {
          this.client = responseObject.data as Client; // Cast la propiedad 'data' a tipo Client
        },
        error: (error: any) => console.error(error)
      });
    }
  }
}

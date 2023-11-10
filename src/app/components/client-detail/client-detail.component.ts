import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
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
  object!: Client;
  @ViewChild('clientDetailTemplate', { static: true }) clientDetailTemplate!: TemplateRef<any>;

  constructor(private service: ClientService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
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
}

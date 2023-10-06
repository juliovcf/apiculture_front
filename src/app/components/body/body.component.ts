import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from '../../services/client.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.get().subscribe(
      (clients: Client[]) => {
        this.clients = clients;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}

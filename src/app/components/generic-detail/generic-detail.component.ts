import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-detail',
  templateUrl: './generic-detail.component.html',
  styleUrls: ['./generic-detail.component.css']
})
export class GenericDetailComponent {

  @Input() dynamicContent!: any;

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-detail',
  templateUrl: './generic-detail.component.html',
  styleUrls: ['./generic-detail.component.css']
})
export class GenericDetailComponent {
  @Input() item: any;
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  objectKeys = Object.keys;

  editItem() {
    this.edit.emit(this.item);
  }

  deleteItem() {
    this.delete.emit(this.item);
  }
}

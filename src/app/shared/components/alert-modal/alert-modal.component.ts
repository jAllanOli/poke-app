import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.less'],
})
export class AlertModalComponent {
  @Input() alertMessage!: string;
  @Output() close = new EventEmitter();

  onClose() {
    this.close.emit();
  }
}

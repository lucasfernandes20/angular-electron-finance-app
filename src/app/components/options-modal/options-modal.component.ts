import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-options-modal',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './options-modal.component.html',
  styleUrl: './options-modal.component.scss'
})
export class OptionsModalComponent {
  @Input({required: true}) visible: boolean = false;
  @Input({required: true}) onHide!: () => void;

}

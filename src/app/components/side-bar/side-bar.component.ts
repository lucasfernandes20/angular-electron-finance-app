import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { OptionsModalComponent } from '../options-modal/options-modal.component';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [ButtonModule, RippleModule, OptionsModalComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  displayModal: boolean = false;

  showModalDialog() {
    this.displayModal = true;
  }

  hideModalDialog() {
    this.displayModal = false;
  }
}

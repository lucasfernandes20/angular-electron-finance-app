import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { OptionsModalComponent } from '../options-modal/options-modal.component';
import {
  ModalData,
  ModalNameOptions,
  ModalType,
  ModalTypeOptions,
} from './side-bar-actions-types';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [ButtonModule, RippleModule, OptionsModalComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  displayModal = signal<ModalData>({
    open: false,
    type: ModalType.Income,
    options: [],
    name: '',
  });
  ModalType = ModalType;

  getOptionsByType(type: ModalType): string[] {
    return ModalTypeOptions[type];
  }

  getModalNameByType(type: ModalType): string {
    return ModalNameOptions[type];
  }

  showModalDialog(type: ModalType) {
    this.displayModal.update((data) => ({
      ...data,
      open: true,
      type,
      options: this.getOptionsByType(type),
      name: this.getModalNameByType(type),
    }));
  }

  public hideModalDialog() {
    this.displayModal.set({
      open: false,
      type: ModalType.Income,
      options: [],
      name: '',
    });
  }

  public onSelectOptions(option: string) {
    console.log('option', option);
    this.hideModalDialog();
  }
}

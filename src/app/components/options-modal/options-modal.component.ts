import { Component, OnChanges, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModalData } from '../side-bar/side-bar-actions-types';
import { ListboxModule } from 'primeng/listbox';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-options-modal',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    ListboxModule,
    CardModule,
  ],
  templateUrl: './options-modal.component.html',
  styleUrl: './options-modal.component.scss',
})
export class OptionsModalComponent implements OnChanges {
  modalData = input.required<ModalData>();
  onHide = input.required<() => void>();

  reactiveOptions!: string[];

  formGroup!: FormGroup;

  ngOnChanges() {
    console.log('modalData', this.modalData().options);
    this.reactiveOptions = this.modalData().options;

    this.formGroup = new FormGroup({
      selectedOption: new FormControl<string | null>(null),
    });
  }
}

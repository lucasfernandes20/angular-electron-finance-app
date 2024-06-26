import { Component, OnChanges,  input, output } from '@angular/core';
import { ModalData } from '../side-bar/side-bar-actions-types';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ListboxModule } from 'primeng/listbox';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-options-modal',
  standalone: true,
  imports: [
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    ListboxModule,
    CardModule,
    InputGroupModule,
    InputGroupAddonModule
  ],
  templateUrl: './options-modal.component.html',
  styleUrl: './options-modal.component.scss',
})
export class OptionsModalComponent implements OnChanges {
  modalData = input.required<ModalData>();
  onHide = output<() => void>();
  onSelect = output<string>();

  reactiveOptions!: string[];

  formGroup!: FormGroup;

  ngOnChanges() {
    this.reactiveOptions = this.modalData().options;

    this.formGroup = new FormGroup({
      selectedOption: new FormControl<string | null>(null),
      moneyQuantity: new FormControl<number | null>(null),
    });

  }

  public onOptionSelect() {
    this.onSelect.emit(this.formGroup.value);
  }
}

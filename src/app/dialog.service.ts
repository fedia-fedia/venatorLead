import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { StepperDialogComponent } from './stepper-dialog/stepper-dialog.component';

@Injectable({
  providedIn: 'root'
})

export class DialogService {

  constructor(private dialog: MatDialog) { }

  openStepperDialog(): void {
    this.dialog.open(StepperDialogComponent, {
      width: '600px',
      position: { top: '8%' } 
    });
  }
}

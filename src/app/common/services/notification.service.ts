import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private matSnack: MatSnackBar) { }

  callNotification(message: string, type: 'success' | 'error') {
    const config: MatSnackBarConfig = {
      duration: 3000,
      horizontalPosition: 'right', 
      verticalPosition: 'top', 
      panelClass: type === 'success' ? 'success-snackbar' : 'error-snackbar',
    };

    this.matSnack.open(message, 'Close', config);
  }

}

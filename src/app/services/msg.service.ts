import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  
  constructor(private snack: MatSnackBar) { }

  showMensage(msg: string, valid: boolean = false) {
    this.snack.open(msg, 'x', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: valid ? ['msg-error'] : ['msg-sucess']
    })
  }
}

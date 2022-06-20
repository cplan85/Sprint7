import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatRippleModule,
  ],
})
export class MaterialModule {}

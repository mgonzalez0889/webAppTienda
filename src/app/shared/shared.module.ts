import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';




@NgModule({
  declarations: [LoginComponent, ToolbarComponent, ConfirmDialogComponent ],
  exports: [
    ToolbarComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  entryComponents: [ConfirmDialogComponent]
})
export class SharedModule { }

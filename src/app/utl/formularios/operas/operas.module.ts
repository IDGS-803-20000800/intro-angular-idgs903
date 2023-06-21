import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperasBasComponent } from '../operas-bas/operas-bas.component';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    OperasBasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule
  ], 
  exports: [
    OperasBasComponent
  ]
})
export class OperasModule { }

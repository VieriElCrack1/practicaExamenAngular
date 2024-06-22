import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  exports: [
    MatCardModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule
  ]
})
export class ModuleModule { }

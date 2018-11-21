import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { SecurityByPassModule } from '../security-by-pass/security-by-pass.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    SecurityByPassModule
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class SearchModule { }

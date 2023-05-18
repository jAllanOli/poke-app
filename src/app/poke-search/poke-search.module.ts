import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PokeSearchComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class PokeSearchModule {}

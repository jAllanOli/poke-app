import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { DetailsModalComponent } from './components/details-modal/details-modal.component';
import { ButtonComponent } from './components/button/button.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SvgComponent } from './components/svg/svg.component';
import { SvgHoverDirective } from './directives/svg-hover.directive';

@NgModule({
  declarations: [
    AlertModalComponent,
    PokemonCardComponent,
    DetailsModalComponent,
    ButtonComponent,
    PaginationComponent,
    SvgComponent,
    SvgHoverDirective,
  ],
  imports: [CommonModule],
  exports: [
    AlertModalComponent,
    PokemonCardComponent,
    DetailsModalComponent,
    ButtonComponent,
    PaginationComponent,
    SvgComponent,
    SvgHoverDirective,
  ],
})
export class SharedModule {}

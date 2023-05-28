import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './components/alert-modal/alert-modal.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { DetailsModalComponent } from './components/details-modal/details-modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SvgComponent } from './components/svg/svg.component';
import { SvgHoverDirective } from './directives/svg-hover.directive';
import { SnakeToNormalCasePipe } from './pipes/snake-to-normal-case.pipe';

@NgModule({
  declarations: [
    AlertModalComponent,
    PokemonCardComponent,
    DetailsModalComponent,
    PaginationComponent,
    SvgComponent,
    SvgHoverDirective,
    SnakeToNormalCasePipe,
  ],
  imports: [CommonModule],
  exports: [
    AlertModalComponent,
    PokemonCardComponent,
    DetailsModalComponent,
    PaginationComponent,
    SvgComponent,
    SvgHoverDirective,
    SnakeToNormalCasePipe,
  ],
})
export class SharedModule {}

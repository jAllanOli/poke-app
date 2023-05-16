import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.less'],
})
export class PokemonCardComponent {
  @Input()
  name!: string | undefined;
  @Input()
  sprite!: string | undefined;
  @Input()
  id!: number | undefined;
}

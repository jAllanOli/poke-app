import { Component, Input } from '@angular/core';
import { TypeSlot } from 'src/app/shared/services/pokemons.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.less'],
})
export class PokemonCardComponent {
  @Input() name!: string;
  @Input() sprite!: string;
  @Input() id!: number;
  @Input() types!: TypeSlot[];

  baseIconPath = '../../../assets/typeIcons/';
}

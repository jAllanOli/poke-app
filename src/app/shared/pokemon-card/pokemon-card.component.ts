import { Component, Input } from '@angular/core';
import { PokemonDetails } from 'src/app/shared/services/pokemons.service';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.less'],
})
export class PokemonCardComponent {
  @Input() pokemonProps!: PokemonDetails;

  modalVisibility = false;
  isFavorited!: boolean;
  baseIconPath = '../../../assets/typeIcons/';

  constructor(private favoriteService: FavoriteService) {}

  onClick() {
    if (this.isFavorited) {
      return;
    }
    this.favoriteService.putFavorite(this.pokemonProps.id);
  }

  onCardClick() {
    this.modalVisibility = true;
  }

  toggleModalVisibility() {
    this.modalVisibility = !this.modalVisibility;
  }
}

import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/shared/services/pokemons.service';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.less'],
})
export class PokemonCardComponent implements AfterContentInit {
  @Input() pokemonProps!: PokemonDetails;

  isFavorited!: boolean;
  baseIconPath = '../../../assets/typeIcons/';

  constructor(private favoriteService: FavoriteService) {}

  ngAfterContentInit(): void {
    this.isFavorited = this.verifyFavorited();
  }

  onClick() {
    if (this.isFavorited) {
      return;
    }
    this.favoriteService.putFavorite(this.pokemonProps);
    this.isFavorited = this.verifyFavorited();
  }

  verifyFavorited() {
    return this.favoriteService.getFavorites().includes(this.pokemonProps);
  }
}

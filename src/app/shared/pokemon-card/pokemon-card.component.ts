import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/shared/services/pokemons.service';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.less'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemonProps!: PokemonDetails;
  @Input() isFavorited?: boolean;

  modalVisibility = false;
  baseIconPath = '../../../assets/typeIcons/';

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.isFavorited = this.verifyFavorite();
  }

  onClick() {
    if (this.isFavorited) {
      this.favoriteService.removeFavorite(this.pokemonProps.id);
      this.isFavorited = this.verifyFavorite();
      return;
    }
    this.favoriteService.putFavorite(this.pokemonProps.id);
    this.isFavorited = this.verifyFavorite();
  }

  onCardClick() {
    this.modalVisibility = true;
  }

  toggleModalVisibility() {
    this.modalVisibility = !this.modalVisibility;
  }

  verifyFavorite() {
    return this.favoriteService.getFromStorage().includes(this.pokemonProps.id);
  }
}

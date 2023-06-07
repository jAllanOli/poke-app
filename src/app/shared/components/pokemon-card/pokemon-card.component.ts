import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FavoriteService } from '../../services/favorite.service';
import { PokemonDetails } from '../../types/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.less'],
})
export class PokemonCardComponent implements OnInit {
  @Output() favoriteUpdate = new EventEmitter();
  @Input() pokemonProps!: PokemonDetails;
  isFavorited!: boolean;

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
      this.favoriteUpdate.emit();
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

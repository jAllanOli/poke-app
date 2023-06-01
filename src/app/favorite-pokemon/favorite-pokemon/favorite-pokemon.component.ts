import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';

import { FavoriteService } from 'src/app/shared/services/favorite.service';
import {
  PokemonDetails,
  PokemonsService,
} from 'src/app/shared/services/pokemons.service';

@Component({
  selector: 'app-favorite-pokemon',
  templateUrl: './favorite-pokemon.component.html',
  styleUrls: ['./favorite-pokemon.component.less'],
})
export class FavoritePokemonComponent implements OnInit {
  favoritePokemonIds: number[] = this.favoritePokemonService.getFromStorage();
  favoritePokemons: PokemonDetails[] = [];

  constructor(
    private favoritePokemonService: FavoriteService,
    private pokemonsService: PokemonsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getFavorites();
  }

  updateFavorites() {
    this.favoritePokemonIds = this.favoritePokemonService.getFromStorage();
    this.getFavorites();
  }

  getFavorites() {
    this.favoritePokemons = [];
    this.favoritePokemonIds.map((pokemonId) => {
      this.pokemonsService
        .getPokemonDetails(pokemonId)
        .pipe(take(1))
        .subscribe((data) => this.favoritePokemons.push(data));
    });
  }

  goToList() {
    this.router.navigate(['/pokemons-list']);
  }
}

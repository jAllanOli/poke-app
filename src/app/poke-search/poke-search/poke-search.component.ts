import { Component } from '@angular/core';
import { take } from 'rxjs';

import { PokemonsService } from 'src/app/shared/services/pokemons.service';
import { PokemonDetails } from 'src/app/shared/types/pokemon';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.less'],
})
export class PokeSearchComponent {
  searchName!: string;
  receivedPokemon!: PokemonDetails;
  isLoading!: boolean;
  modalMessage!: string;
  modalVisibility = false;
  subscription!: any;

  constructor(private service: PokemonsService) {}

  onClick() {
    if (!this.searchName) {
      this.showModal('You need to provide a pokemon Name or Id');
      return;
    }
    this.isLoading = true;
    this.searchName = this.searchName.toLowerCase().trim();
    this.subscription = this.service
      .getPokemonDetails(this.searchName)
      .pipe(take(1))
      .subscribe(
        (data) => {
          return (this.receivedPokemon = data);
        },
        () => {
          this.isLoading = false;
          this.showModal('Pokemon not found');
        },
        () => (this.isLoading = false)
      );
  }

  showModal(message: string) {
    this.modalMessage = message;
    this.toggleModalVisibility();
  }

  toggleModalVisibility() {
    this.modalVisibility = !this.modalVisibility;
  }
}

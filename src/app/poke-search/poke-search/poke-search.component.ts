import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import {
  PokemonDetails,
  PokemonsService,
} from 'src/app/shared/services/pokemons.service';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.less'],
})
export class PokeSearchComponent implements OnInit {
  searchName!: string;
  receivedPokemon!: PokemonDetails;
  isLoading!: boolean;
  modalMessage!: string;
  modalVisibility = false;

  constructor(private service: PokemonsService) {}

  ngOnInit() {}

  onClick() {
    if (!this.searchName) {
      this.showModal('You need to provide a pokemon Name or Id');
      return;
    }
    this.isLoading = true;
    this.searchName = this.searchName.toLowerCase().trim();
    this.service
      .getPokemonDetails(this.searchName)
      .pipe(take(1))
      .subscribe(
        (data) => {
          this.receivedPokemon = data;
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

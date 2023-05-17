import { Component, OnInit } from '@angular/core';
import { concatMap, finalize, from, map, mergeMap, toArray } from 'rxjs';

import {
  PokemonDetails,
  PokemonsService,
} from 'src/app/shared/services/pokemons.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.less'],
})
export class PokemonsListComponent implements OnInit {
  pokemons: PokemonDetails[] = [];
  isLoading!: boolean;
  currentPage = 0;
  totalItems!: number;
  modalVisibility = false;
  modalMessage!: string;

  constructor(private service: PokemonsService) {}
  ngOnInit(): void {
    this.fetchPokemons();
  }

  fetchPokemons(offset = 0) {
    this.pokemons = [];
    this.isLoading = true;
    this.service
      .getPokemons(offset)
      .pipe(
        map(({ results, count }) => {
          this.totalItems = count;
          return results.map(({ name }) => name);
        }),
        mergeMap((names) =>
          from(names).pipe(
            concatMap((name) => this.service.getPokemonDetails(name))
          )
        ),
        toArray(),
        finalize(() => (this.isLoading = false))
      )
      .subscribe((pokemons) =>
        pokemons.forEach((pokemon) => {
          this.pokemons.push(pokemon);
          console.log(this.pokemons);
        })
      );
  }

  nextPage() {
    if (this.currentPage > this.totalItems / 12) return;
    this.currentPage++;
    this.fetchPokemons(this.currentPage * 12);
  }

  previousPage() {
    if (this.currentPage === 0) {
      this.toggleModalVisibility();
      this.modalMessage = 'Already on first page';
      return;
    }
    this.currentPage--;
    this.fetchPokemons(this.currentPage * 12);
  }

  toggleModalVisibility() {
    this.modalVisibility = !this.modalVisibility;
  }
}

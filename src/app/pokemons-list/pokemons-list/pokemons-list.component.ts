import { Component, OnInit } from '@angular/core';
import { concatMap, finalize, from, map, mergeMap, toArray } from 'rxjs';

import { PokemonsService } from 'src/app/shared/services/pokemons.service';
import { PokemonDetails } from 'src/app/shared/types/pokemon';

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

  constructor(private service: PokemonsService) {}
  ngOnInit(): void {
    this.getPokemonsQtd();
  }

  fetchPokemons(offset = 0) {
    this.pokemons = [];
    this.isLoading = true;
    this.service
      .getPokemons(offset)
      .pipe(
        map(({ results }) => results.map(({ name }) => name)),
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
        })
      );
  }

  getPokemonsQtd(): void {
    this.service
      .getPokemons()
      .pipe(map((response) => (this.totalItems = response.count)))
      .subscribe();
  }

  handleNavigation(pageNumber: number) {
    this.currentPage = pageNumber;
    this.navigate();
  }

  navigate() {
    this.fetchPokemons((this.currentPage - 1) * 20);
  }
}

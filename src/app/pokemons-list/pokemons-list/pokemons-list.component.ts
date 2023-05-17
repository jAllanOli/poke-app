import { Component, OnInit } from '@angular/core';
import { concatMap, from, map, mergeMap, toArray } from 'rxjs';

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

  constructor(private service: PokemonsService) {}
  ngOnInit(): void {
    this.service
      .getPokemons()
      .pipe(
        map(({ results }) => results.map(({ name }) => name)),
        mergeMap((names) =>
          from(names).pipe(
            concatMap((name) => this.service.getPokemonDetails(name))
          )
        ),
        toArray()
      )
      .subscribe((pokemons) =>
        pokemons.forEach((pokemon) => {
          this.pokemons.push(pokemon);
          console.log(this.pokemons);
        })
      );
  }
}

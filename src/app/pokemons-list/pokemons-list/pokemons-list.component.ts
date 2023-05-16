import { Component, OnInit } from '@angular/core';
import { Observable, map, take } from 'rxjs';
import { Pokemon } from 'src/app/shared/models/pokemon';

import { PokemonsService } from 'src/app/shared/services/pokemons.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.less'],
})
export class PokemonsListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  poke: Pokemon = {};

  constructor(private service: PokemonsService) {}
  ngOnInit(): void {
    this.service
      .getPokemons()
      .pipe(map((data) => data.results))
      .subscribe((data) => {
        data.map((item) => {
          console.log(item);
          this.service.getPokemonByUrl(item.url).subscribe((data: any) => {
            this.poke = {
              id: data.id,
              name: data.name,
              sprite: data.sprites.front_default,
            };
            this.pokemons.push(this.poke);
            console.log(this.pokemons);
          });
        });
      });
  }
}

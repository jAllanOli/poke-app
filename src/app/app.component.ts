import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './pokemons.service';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  pokemons$: any;

  constructor(private service: PokemonsService) {}

  ngOnInit(): void {
    this.pokemons$ = this.service
      .getPokemons()
      .pipe(map((value: any) => value.results));
  }
}

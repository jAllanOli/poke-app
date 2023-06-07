import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../shared/services/pokemons.service';
import { PokemonDetails } from '../shared/types/pokemon';

@Component({
  selector: 'app-full-details-page',
  templateUrl: './full-details-page.component.html',
  styleUrls: ['./full-details-page.component.less'],
})
export class FullDetailsPageComponent implements OnInit {
  pokemonId!: number;
  pokemonData!: PokemonDetails;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService
  ) {}

  ngOnInit(): void {
    this.pokemonId = this.route.snapshot.params['id'];
    this.pokemonsService.getPokemonDetails(this.pokemonId).subscribe((data) => {
      this.pokemonData = data;
      console.log(this.pokemonData);
    });
  }
}

import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonsService } from '../shared/services/pokemons.service';
import { PokemonDetails } from '../shared/types/pokemon';
import { DetailsService } from './details.service';
import { PokemonSpecies } from '../shared/types/species';

@Component({
  selector: 'app-full-details-page',
  templateUrl: './full-details-page.component.html',
  styleUrls: ['./full-details-page.component.less'],
})
export class FullDetailsPageComponent implements OnInit {
  pokemonId!: number;
  pokemonData!: PokemonSpecies;
  genera!: string;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService,
    private detailsService: DetailsService
  ) {}

  ngOnInit(): void {
    this.pokemonId = this.route.snapshot.params['id'];
    this.detailsService.getPokemonSpecies(this.pokemonId).subscribe(
      (data) => {
        this.pokemonData = data;
      },
      (error) => console.error(error),
      () => {
        this.isLoading = false;
        this.filterEngGenera();
        console.log(this.pokemonData);
      }
    );
  }

  private filterEngGenera() {
    this.genera = this.pokemonData.genera.filter(
      (genu) => genu.language.name === 'en'
    )[0].genus;
  }
}

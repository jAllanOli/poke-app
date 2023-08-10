import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonsService } from '../shared/services/pokemons.service';
import { PokemonDetails } from '../shared/types/pokemon';
import { DetailsService } from './details.service';
import { PokemonSpecies } from '../shared/types/species';
import { Sprites } from '../shared/types/sprites';
import { take } from 'rxjs';
import { MoveDetail } from '../shared/types/move';

@Component({
  selector: 'app-full-details-page',
  templateUrl: './full-details-page.component.html',
  styleUrls: ['./full-details-page.component.less'],
})
export class FullDetailsPageComponent implements OnInit {
  pokemonId!: number;
  pokemonData!: PokemonSpecies;
  pokemonBasicDetails!: PokemonDetails;
  genera!: string;
  isLoading = true;

  generationOptions!: string[];
  selectedGeneration = 'generation-i';
  versionOptions!: string[];
  versionSelected!: string;
  sprites: string[] = [];

  moveVersionOptions!: Set<string>;
  selectedMoveVersion!: string;
  currentMovesList!: MoveDetail[];

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
        //console.log(this.pokemonData);
      }
    );
    this.pokemonsService
      .getPokemonDetails(this.pokemonId)
      .pipe(take(1))
      .subscribe((data) => {
        this.pokemonBasicDetails = data;
        console.log(data);
        this.generationOptions = Object.keys(
          this.pokemonBasicDetails.sprites.versions!
        );
        this.updateVersions();
        this.moveVersionOptions = this.getMoveVersionsAvaliable();
      });
  }

  getVersionOptions() {
    const generations = this.pokemonBasicDetails.sprites.versions!;
    return Object.keys(
      generations[this.selectedGeneration as keyof typeof generations]
    );
  }

  updateVersions() {
    this.versionOptions = this.getVersionOptions();
  }

  setGameVersion(event: string) {
    this.versionSelected = event;
    this.sprites = this.getSprites();
  }

  getSprites(): string[] {
    const generations = this.pokemonBasicDetails.sprites.versions!;
    const versions =
      generations[this.selectedGeneration as keyof typeof generations];

    const sprites: Sprites =
      versions[this.versionSelected as keyof typeof versions];

    const result = Object.values(sprites).filter(
      (item) => item && typeof item === 'string'
    );

    const withAnimations = Object.values(sprites).filter(
      (item) => item && typeof item !== 'string'
    );

    if (withAnimations.length) {
      const animatedSprites = Object.values(withAnimations[0]);
      animatedSprites.map((item) => item && result.push(item));
    }

    return result;
  }

  closeSprites() {
    this.sprites = [];
    this.selectedGeneration = 'generation-i';
    this.versionOptions = this.getVersionOptions();
    this.versionSelected = '';
  }

  getMoveVersionsAvaliable() {
    const versionOptions: Set<string> = new Set();
    this.pokemonBasicDetails.moves.map((move) =>
      move.version_group_details.map((version) => {
        versionOptions.add(version.version_group.name);
      })
    );

    return versionOptions;
  }

  setMoveVersion(event: string) {
    this.selectedMoveVersion = event;
  }

  filterMovesByVersion() {
    return this.pokemonBasicDetails.moves.map((move) =>
      move.version_group_details.filter(
        (version) => version.version_group.name === this.selectedMoveVersion
      )
    );
  }

  getMovesLearnMethods() {
    console.log('chamou');
    const methods: Set<string> = new Set();
    this.pokemonBasicDetails.moves.map((move) =>
      move.version_group_details.map((version) => {
        if (version.version_group.name === this.selectedMoveVersion) {
          methods.add(version.move_learn_method.name);
        }
      })
    );

    return methods;
  }

  filterMovesByMethod(method: string) {
    const result: string[] = [];
    this.pokemonBasicDetails.moves.map((move) =>
      move.version_group_details.map((version) => {
        if (
          version.version_group.name === this.selectedMoveVersion &&
          version.move_learn_method.name === method
        ) {
          result.push(move.move.name);
        }
      })
    );
    return result;
  }

  private filterEngGenera() {
    this.genera = this.pokemonData.genera.filter(
      (genu) => genu.language.name === 'en'
    )[0].genus;
  }
}

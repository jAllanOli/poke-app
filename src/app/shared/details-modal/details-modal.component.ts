import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoveDetail, PokemonDetails } from '../services/pokemons.service';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.less'],
})
export class DetailsModalComponent implements OnInit {
  @Input() pokemonProps!: PokemonDetails;
  @Output() modalVisibility = new EventEmitter();
  levelUpMoves!: MoveDetail[];

  ngOnInit(): void {
    this.levelUpMoves = this.getPokemonMoves();
  }

  onClose() {
    this.modalVisibility.emit();
  }

  getPokemonMoves() {
    const orderedArray = this.pokemonProps.moves
      .filter(
        (move) =>
          move.version_group_details[0].move_learn_method.name === 'level-up'
      )
      .sort((x, y) => {
        return (
          x.version_group_details[0].level_learned_at -
          y.version_group_details[0].level_learned_at
        );
      });
    return orderedArray;
  }
}

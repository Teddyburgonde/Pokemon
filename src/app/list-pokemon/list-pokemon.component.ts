import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
selectPokemon(arg0: string) {
throw new Error('Method not implemented.');
}
  pokemonList: Pokemon[] = POKEMONS;

}

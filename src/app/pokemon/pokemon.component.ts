import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemon: Pokemon = {} as Pokemon;

  private proximoId: number = 1;

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon() {
    this.service.idProcurar = this.proximoId.toString();
    this.service.getPokemon().subscribe(
      {
        next: data => {
          this.pokemon = data;
          this.pokemon.img = data.sprites.other.home.front_default;
        }
      }
    );
  }

  proximoPokemon() {
    this.proximoId = this.proximoId + 1;
    this.service.idProcurar = this.proximoId.toString();
    this.service.getPokemon().subscribe(
      {
        next: data => {
          this.pokemon = data;
          this.pokemon.img = data.sprites.other.home.front_default;
        }
      }
    );
  }

  anteriorPokemon() {
    this.proximoId = this.proximoId - 1;
    this.service.idProcurar = this.proximoId.toString();
    this.service.getPokemon().subscribe(
      {
        next: data => {
          this.pokemon = data;
          this.pokemon.img = data.sprites.other.home.front_default;
        }
      }
    );
  }
}

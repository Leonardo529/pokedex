import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  public idProcurar: string = "1";

  getPokemon(): Observable<Pokemon> {
    return this.http.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/" + this.idProcurar)
  }
}

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Armen'},
      {id: 12, name: 'Armine'},
      {id: 13, name: 'Artyom'},
      {id: 14, name: 'Davit'},
      {id: 15, name: 'Mark'},
      {id: 16, name: 'Shoxer'},
      {id: 17, name: 'Hovo'},
      {id: 18, name: 'Armencho'},
      {id: 19, name: 'Astghik'},
      {id: 20, name: 'Shoxakat'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

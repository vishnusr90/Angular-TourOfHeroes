import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    console.log("2. Fetching ...")
    this.messageService.addMessage("HeroService fetched data");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage(`Hero Service fetched hero id = ${id}`);
    return of(HEROES.find(hero => hero.id === id))
  }
}

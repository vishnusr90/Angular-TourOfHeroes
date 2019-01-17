import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heros';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() { 
    this.getHeroes();
  }

  getHeroes(): void {
    console.log("Getting heores from service");
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  clickHero(hero: Hero): void{
    console.log("clicked hero");
    this.selectedHero = hero;
  }
}

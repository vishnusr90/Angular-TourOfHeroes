import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heros';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit() { 
    console.log("init");
    this.getHeroes();
  }

  getHeroes(): void {
    console.log("1. Getting heores from service ...");
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  clickHero(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.addMessage("Clicked hero : "+hero.name);
  }
}

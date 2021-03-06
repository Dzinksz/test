import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Dzinkss' 
  };

  title = "Zeljeni heroj";
  heroes = HEROES;

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  hero_list: any = [];
  constructor() { }

  metoda(){
    this.hero_list.push({id: this.hero.id, name: this.hero.name});
  }

  ngOnInit(): void{
  }

}


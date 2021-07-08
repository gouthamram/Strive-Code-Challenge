import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../data/mock-data';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Person Finder';
  public originalList: any[] = PEOPLE;
  public peopleList: any[] = PEOPLE;
  public name: string = "";
  
  ngOnInit() {
  }

  filterByName(name: string) {
    this.name = name;
    this.peopleList = this.peopleList.filter(person => person.name === name); 
  }
  
  reset() {
    this.peopleList = this.originalList;
  }
}

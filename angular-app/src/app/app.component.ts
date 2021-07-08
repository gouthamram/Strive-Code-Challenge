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
  public peopleList: any[] = PEOPLE;
  public shortList: any[] = [];
  
  ngOnInit() {
    this.shortList = _.take(this.peopleList, 3);
    console.log(_.get(this.peopleList[0], 'name'));
  }
}

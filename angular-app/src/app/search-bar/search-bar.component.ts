import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  public name = new FormControl();
  @Output() nameEntered = new EventEmitter<string>();
  @Output() resetList = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  
  search() {
    this.nameEntered.emit(this.name.value);
  }

  clear() {
    this.name.setValue("");
    this.resetList.emit(true);
  }
}

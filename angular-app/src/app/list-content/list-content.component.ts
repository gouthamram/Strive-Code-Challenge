import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss']
})
export class ListContentComponent implements OnInit {
  @Input() person: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}

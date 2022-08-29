import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs-cards',
  templateUrl: './blogs-cards.component.html',
  styleUrls: ['./blogs-cards.component.css']
})
export class BlogsCardsComponent implements OnInit {
  seeMore: boolean = false;
  @Input() card: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent implements OnInit {

  @Input() card: any;
  
  constructor() { }

  ngOnInit(): void {
  }
  visible: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if(event.target.innerWidth >= 536 || event.target.innerWidth <= 1440){
      this.visible = true;
      console.log('768 true');
    }else{
      this.visible = false;
    } 
  }

}

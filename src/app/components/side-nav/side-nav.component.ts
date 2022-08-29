import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  visible: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if(event.target.innerWidth < 700){
      this.visible = false;
    }else{
      this.visible = true;
    } 
  }

  constructor() { }

  ngOnInit(): void {
  }

}

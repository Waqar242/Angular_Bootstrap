import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  
  list: any;   // list to store blogs
  cols: number = 2;
  seeMore: boolean = false;
  visible: boolean = false;
  
  // Using http client to get data 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData().subscribe(next=>{
      this.list = next;
      console.log(this.list)
    })
  }

  // Function to retrieve blogs
  getData():Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

  // Media Queries
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if(event.target.innerWidth == 768){
      this.visible = true;
    }else{
      this.visible = false;
    } 
  }
}

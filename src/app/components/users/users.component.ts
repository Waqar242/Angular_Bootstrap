import {Component, ViewChild, OnInit, HostListener} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject} from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersList: any;  // to store users
  check: boolean = true;  // for toggle between list and grid view
  displayedColumns: string[] = ['id', 'name', 'username', 'date']; //columns for users table

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  dataSource: any;
  length = 0;
  pageSize = 5;
  pageIndex = 0;
  itemsPerPage!: number;
  totalItems: any =50;
  page: any=1;
  previousPage: any;
  pageSizeOptions = [5, 10];
  showFirstLastButtons = false;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getData().subscribe(next=>{
      this.usersList = next;
      this.length = this.usersList.length;
      this.loadData();
    })
  }
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.usersList);
    this.dataSource.paginator = this.paginator;
}

  // Function for pagination
  setPagination(value: number){
    this.pageSize = value + 1;
    this.loadData();
  }

  // Function to retrieve data
  getData():Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }

  // Filter Function
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Toggle Function
  onValChange(value: string){
    if(value == 'list')
    {
      this.check = !this.check;
    }
    else if('grid')
    {
      this.check = !this.check;
    }
  }
  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    const skip= this.pageIndex*this.pageSize;
    this.dataSource = new MatTableDataSource(this.usersList.slice(skip,skip+this.pageSize));
    return event;
  }
  visible: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if(event.target.innerWidth == 768){
      this.visible = true;
      console.log('768 true');
    }else{
      this.visible = false;
    } 
  }
  loadPage(page: number) {
    debugger
    if (page !== (this.pageIndex-1)) {
      this.pageIndex = page-1;
      this.loadData();
    }
  }
  loadData() {
    const skip= this.pageIndex*this.pageSize;
    this.dataSource = new MatTableDataSource(this.usersList.slice(skip,skip+this.pageSize));
  }
}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { UsersComponent } from './components/users/users.component';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RecentBlogsCardsComponent } from './components/recent-blogs-cards/recent-blogs-cards.component';
import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';
import { BlogsCardsComponent } from './components/blogs-cards/blogs-cards.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { UserCardsComponent } from './components/user-cards/user-cards.component';
import {DataTablesModule} from 'angular-datatables';
import {MatListModule} from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    HomeComponent,
    BlogsComponent,
    UsersComponent,
    RecentBlogsCardsComponent,
    DashboardCardsComponent,
    BlogsCardsComponent,
    UserCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    DataTablesModule,
    MatListModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prestories=true;
  topcategories=false;
  toppicksforyou=false;
  booksforthismonth=false;
  constructor() { }

  ngOnInit(): void {
  }

  prestoriesview(){
    this.prestories = true;
    this.topcategories = false;
    this.toppicksforyou = false;
    this.booksforthismonth = false;
  }

  topcategoriesview(){
    this.topcategories = true;
    this.prestories = false;
    this.toppicksforyou = false;
    this.booksforthismonth = false;
  }

  toppicksforyouview(){
    this.toppicksforyou = true;
    this.prestories = false;
    this.topcategories = false;
    this.booksforthismonth = false;
  }

  booksforthismonthview(){
    this.booksforthismonth = true;
    this.prestories = false;
    this.topcategories = false;
    this.toppicksforyou = false;
  }
}

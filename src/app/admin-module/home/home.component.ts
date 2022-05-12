import { Component, OnInit } from '@angular/core';
import {ListInterface} from "../../shared/interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bootcamp!: ListInterface;
  courses = 0;
  constructor() { }

  ngOnInit(): void {
  }
  getBootcamp(event: any) {
    this.bootcamp = event;
    for (let i = 0; i < this.bootcamp.data.length; i ++) {
      this.courses += this.bootcamp.data[i].courses.length;
    }
  }
}

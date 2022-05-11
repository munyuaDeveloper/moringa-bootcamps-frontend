import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../shared/services/shared.service";
import {BootcampApis} from "../../shared/services/apis";
import {ListInterface} from "../../shared/interface";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  serverUrl = environment.API_SERVICE_URL;
  bootcamps!: ListInterface;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.getData(BootcampApis._bootcampsList).subscribe(res => {
      this.bootcamps = res as ListInterface;
    })
  }

}

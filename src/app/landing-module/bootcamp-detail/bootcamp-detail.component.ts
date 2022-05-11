import { Component, OnInit } from '@angular/core';
import {BootcampDetail} from "../../shared/interface";
import {SharedService} from "../../shared/services/shared.service";
import {BootcampApis} from "../../shared/services/apis";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-bootcamp-detail',
  templateUrl: './bootcamp-detail.component.html',
  styleUrls: ['./bootcamp-detail.component.scss']
})
export class BootcampDetailComponent implements OnInit {
  serverUrl = environment.API_SERVICE_URL;
  bootcamp!: BootcampDetail;
  bootcampId!: string;

  constructor(private sharedService: SharedService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.bootcampId = params.id;
      this.getDetails();
    })

  }
  getDetails(){
      this.sharedService.getData(`${BootcampApis._bootcampsList}/${this.bootcampId}`).subscribe(res => {
        this.bootcamp = res as BootcampDetail;
      })
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ListInterface} from "../../shared/interface";
import {SharedService} from "../../shared/services/shared.service";
import {BootcampApis} from "../../shared/services/apis";
import {MessageService} from "../../shared/services/message.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-bootcamps',
  templateUrl: './bootcamps.component.html',
  styleUrls: ['./bootcamps.component.scss']
})
export class BootcampsComponent implements OnInit {
  serverUrl = environment.API_SERVICE_URL;
  bootcamps!: ListInterface;
  @Output() bootcampOutput = new EventEmitter<ListInterface>();

  constructor(private sharedService: SharedService,
              private messageService: MessageService) { }

  ngOnInit(): void {
   this.getBootcamps();
  }
  getBootcamps(): void {
    this.sharedService.getData(BootcampApis._bootcampsList).subscribe(res => {
      this.bootcamps = res as ListInterface;
      this.bootcampOutput.emit(this.bootcamps);
    })
  }
  deleteBootcamp(bootcampId: string): void {
    this.sharedService.deleteData(`${BootcampApis._bootcampsList}/${bootcampId}`).subscribe(res => {
      this.messageService.setMessage('Bootcamp deleted successfully')
      this.messageService.showSuccess();
      this.getBootcamps();
    })
  }
}

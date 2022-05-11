import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";
import {SharedService} from "../../shared/services/shared.service";
import {MessageService} from "../../shared/services/message.service";
import {FormModalComponent} from "../../shared/form-modal/form-modal.component";
import {BootcampApis} from "../../shared/services/apis";
import {BootcampDetail} from "../../shared/interface";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-manage-bootcamp',
  templateUrl: './manage-bootcamp.component.html',
  styleUrls: ['./manage-bootcamp.component.scss']
})
export class ManageBootcampComponent implements OnInit {
  serverUrl = environment.API_SERVICE_URL;

  formFields: any[] = [
    {
      code: "title",
      label: "Title",
      place_holder: "Title",
      input_type: "input",
      type: "text",
      value: "",
      required: true,
      field_options: []
    },
    {
      code: "weeks",
      label: "Duration",
      place_holder: "Duration in weeks",
      input_type: "input",
      type: "number",
      value: "",
      required: true,
      field_options: []
    },
    {
      code: "tuition",
      label: "Tuition",
      place_holder: "Tuition in Ksh",
      input_type: "input",
      type: "number",
      value: "",
      required: true,
      field_options: []
    },
    {
      code: "minimumSkill",
      label: "Minimum Skills",
      place_holder: "Minimum Skills",
      input_type: "select",
      type: "text",
      value: "",
      required: true,
      field_options: ['beginner', 'intermediate', 'advanced']
    },
    {
      code: "scholarhipsAvailable",
      label: "Is Scholarship Available",
      place_holder: "Is Scholarship Available",
      input_type: "checkbox",
      type: "checkbox",
      value: "",
      required: false,
      field_options: []
    },
    {
      code: "description",
      label: "Description",
      place_holder: "Course Summary",
      input_type: "text_area",
      type: "text",
      value: "",
      required: true,
      field_options: []
    }
  ];

  ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    keyboard : false,
    centered: true
  };
  bootcamp!: BootcampDetail;
  bootcampId!: string;

  constructor(
    private sharedService: SharedService,
    private http: HttpClient,
    private modalService: NgbModal,
    private activeRoute: ActivatedRoute,
    private messageService: MessageService,
  ) { }

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

  openCreateCourseModal(previousData?: any) {
    let data ={}
    if(previousData) {
      data = {
        formFields: this.formFields,
        modalTitle: 'Update Course',
        modalButtonText: 'Save Changes',
        others: previousData
      }
      this.updateFieldOption(this.formFields, 'value', 'name', previousData.name);
    }else {
      data = {
        formFields: this.formFields,
        modalTitle: 'Add Course to the bootcamp',
        modalButtonText: 'Add Course',
        others: previousData
      }
      // this.updateFieldOption(this.formFields, 'value', 'name', '');
    }

    const modalRef = this.modalService.open(FormModalComponent, this.ngbModalOptions);
    modalRef.componentInstance.data = data;
    modalRef.result.then((result) => {
      if (result && previousData) {
        this.sharedService.updateData(`${BootcampApis._courses}/${previousData._id}`, result).subscribe(res=>{
          this.messageService.setMessage('Update course successfully')
          this.messageService.showSuccess();
          this.getDetails();
        })
      }else if(result && !previousData) {
        this.sharedService.postData(`${BootcampApis._bootcampsList}/${this.bootcampId}/courses`, result).subscribe(res=>{
          this.messageService.setMessage('Added course successfully')
          this.messageService.showSuccess();
          this.getDetails();
        })
      }
    }).catch((res) => {});
  }

  updateFieldOption(list:any[], formField: any, field: any, value: any) {
    const objIndex = list.findIndex((obj => obj.code === field));
    list[objIndex][formField] = value;
  }

  deleteCourse(course: any): void {
    this.sharedService.deleteData(`${BootcampApis._courses}/${course._id}`).subscribe(res=>{
      this.messageService.setMessage('Course deleted successfully')
      this.messageService.showSuccess();
      this.getDetails();
    })
  }
}

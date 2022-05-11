import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SharedService} from "../../shared/services/shared.service";
import {BootcampApis} from "../../shared/services/apis";
import {MessageService} from "../../shared/services/message.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BootcampDetail} from "../../shared/interface";

@Component({
  selector: 'app-add-bootcamp',
  templateUrl: './add-bootcamp.component.html',
  styleUrls: ['./add-bootcamp.component.scss']
})
export class AddBootcampComponent implements OnInit {
  addBootcampForm!: FormGroup;
  selectedFile = null;
  fileIDs: any;
  allFiles = new FormData();

  bootcamp!: BootcampDetail;
  selectedFileName = '';
  bootcampId = ''

  constructor(private fb: FormBuilder,
              private sharedService: SharedService,
              private messageService: MessageService,
              private activeRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.addBootcampForm = this.fb.group(	{
      name: ['', Validators.required],
      description: ['', Validators.required],
      website: [''],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      careers: ['', Validators.required],
      housing: [false, Validators.required],
      jobAssistance:[false, Validators.required],
      jobGuarantee: [false, Validators.required],
    });

    this.activeRoute.params.subscribe(params => {
      this.bootcampId = params.id;
      this.getDetails();
    })
  }
  getDetails(){
    this.sharedService.getData(`${BootcampApis._bootcampsList}/${this.bootcampId}`).subscribe(res => {
      this.bootcamp = res as BootcampDetail;

      this.addBootcampForm.patchValue(	{
        name: this.bootcamp.data.name,
        description: this.bootcamp.data.description,
        website: this.bootcamp.data.website,
        phone: this.bootcamp.data.phone,
        email: this.bootcamp.data.email,
        address: this.bootcamp.data.address,
        careers: this.bootcamp.data.careers,
        housing: this.bootcamp.data.housing,
        jobAssistance: this.bootcamp.data.jobAssistance,
        jobGuarantee: this.bootcamp.data.jobGuarantee,
      });
    })
  }

  createBootcamp(): void {
    this.sharedService.postData(BootcampApis._bootcampsList, this.addBootcampForm.value).subscribe(res=>{
      this.bootcamp = res as BootcampDetail;
      // Upload Image
      if (this.allFiles && this.selectedFile) {
        this.sharedService.updateData(`${BootcampApis._bootcampsList}/${this.bootcamp.data._id}/photo`, this.allFiles).subscribe(res => {});
      }

      this.router.navigate(['/admin/bootcamps/manage-bootcamp', this.bootcamp.data._id])
      this.messageService.setMessage('Added bootcamp successfully')
      this.messageService.showSuccess();
    }, err => {})
  }

  updateBootcamp(): void {
    this.sharedService.updateData(`${BootcampApis._bootcampsList}/${this.bootcamp.data._id}`, this.addBootcampForm.value).subscribe(res=>{
      this.bootcamp = res as BootcampDetail;
      // Upload Image
      if (this.allFiles && this.selectedFile) {
        this.sharedService.updateData(`${BootcampApis._bootcampsList}/${this.bootcamp.data._id}/photo`, this.allFiles).subscribe(res => {});
      }

      this.router.navigate(['/admin/bootcamps/manage-bootcamp', this.bootcamp.data._id])
      this.messageService.setMessage('Added bootcamp successfully')
      this.messageService.showSuccess();
    }, err => {})
  }

  openFileInput(DOMId: string) {
    document.getElementById(DOMId)!.click();
  }
  handleFileUpload(e: any, DOMId: string) {
    this.selectedFile = e.target.files[0];
    this.allFiles.append(DOMId, this.selectedFile!);
    this.selectedFileName = e.target.files[0].name;
  }
}

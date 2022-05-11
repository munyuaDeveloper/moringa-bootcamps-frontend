import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  createForm! : FormGroup;
  @Input() public data: any;
  dynamicFormFields: any[] = [];
  formConstructed = false;
  multiSelectValues = [];
  constructor(
      public activeModal: NgbActiveModal,
      private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.data)
    this.createForm = this.fb.group({
    });
    if (this.data) {
      this.dynamicFormFields = this.data.formFields;
      this.createFormControls()
    }
  }
  createFormControls() {
    if (this.dynamicFormFields.length !== 0){
      this.dynamicFormFields.forEach((element: any) => {
        if (element.required) {
          this.createForm.addControl(element.code, new FormControl(element.value, Validators.required))
        } else {
          this.createForm.addControl(element.code, new FormControl(element.value))
        }
      });
      this.formConstructed = true;
    }else {
    }
  }

  submit() {
    this.activeModal.close(this.createForm.value);
  }
}

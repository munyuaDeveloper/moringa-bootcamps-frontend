import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import { GlobalHttpInterceptorService } from './GlobalHttpInterceptorService';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = '';
  constructor(private toastr: ToastrService) { }

  setMessage(message: string) {
    // message = this.clientErrorMessage.clientSideErrorMessage
    this.message = message
  }
  showAlert() {
    this.toastr.warning(this.message, '')
  }
  showSuccess() {
    this.toastr.success(this.message, '')
  }
  showError() {
    this.toastr.error(this.message, '')
  }
}

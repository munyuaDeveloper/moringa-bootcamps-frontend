import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private baseUrl = environment.API_SERVICE_URL;


  constructor(private http: HttpClient) { }

  getData(url: string, param?: any) {
    return this.http.get(this.baseUrl + url, {params: param})
  }

  postData(url: string, data: any) {
    return this.http.post(this.baseUrl + url, data)
  }
  updateData(url: string, data: any) {
    return this.http.put(this.baseUrl + url, data)
  }
  deleteData(url: string) {
    return this.http.delete(this.baseUrl + url)
  }
}

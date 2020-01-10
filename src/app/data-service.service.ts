import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  configUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.configUrl);
  }
}

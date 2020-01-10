import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'evaluation-test';
  countryDetsils:any;

  constructor( private dataService: DataServiceService){
    this.dataService.getData()
    .subscribe((data) => {
      this.countryDetsils = data
      console.log("get data from service", data);

    });
  }
}

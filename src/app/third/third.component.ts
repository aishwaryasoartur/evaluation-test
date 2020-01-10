import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  user: Object = {
    firstName: 'John',
    password:  'test'
  };
  constructor() { }

  ngOnInit() {
  }




    onSubmitTemplateBased() {
        console.log("user", this.user);
    }

}

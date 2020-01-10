import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }from '@angular/forms';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  form: FormGroup;

    firstName = new FormControl("", Validators.required);

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "firstName": this.firstName,
            "password":["", Validators.required]
        });
    }
    onSubmit() {
        console.log("model-based form submitted");
        console.log(this.form.value);
    }

  ngOnInit() {
  }

}

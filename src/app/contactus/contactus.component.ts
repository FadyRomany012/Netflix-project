import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators }  from '@angular/forms';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  myForm=new FormGroup ({
    "Name":new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
      "Email":new FormControl('',[
        Validators.required
      ]),
      "Message":new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ])
  });

  constructor() { }

  ngOnInit() {
  }

}

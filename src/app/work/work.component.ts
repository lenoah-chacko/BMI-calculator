import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {


  userData={
    "height":"",
    "weight":""
  }
  ans:any="";
  constructor() { }

  ngOnInit(): void {
  }
  checkWeight()
  {
    this.ans=(Number(this.userData.weight)/(Number(this.userData.height)*Number(this.userData.height))).toFixed(2);
    if(this.ans=='NaN' || this.ans=='Infinity')
      this.ans="invalid";
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  // Initialize response with empty string
  response = '';
  
  constructor() { }

  ngOnInit() {
  }
  
  onClick() {
    this.response = 'Dummy response';
  }

}

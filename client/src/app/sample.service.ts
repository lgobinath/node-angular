import { Injectable } from '@angular/core';

@Injectable()
export class SampleService {

  constructor() { }
  
  /*
  * This function receives a callback funtion to send back the aynchronous response from the server.
  */
  getData(callback_fun) {
      callback_fun('Hello World');
  }

}

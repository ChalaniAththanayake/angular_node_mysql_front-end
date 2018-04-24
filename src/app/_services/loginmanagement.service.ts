import { Injectable } from '@angular/core';

@Injectable()
export class LoginmanagementService {

  constructor() { }

  signUp(data){
    console.log('mage aiyta adarei',data);
  }

  login(data){
    console.log('zzzzzzz',data);
  }

}

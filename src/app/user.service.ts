import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public username:String;
  public password:String;
  constructor() { 
    this.username=' ';
    this.password=' ';
  }
}

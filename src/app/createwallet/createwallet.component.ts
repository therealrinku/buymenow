import { Component } from '@angular/core';

@Component({
  selector: 'app-createwallet',
  templateUrl: './createwallet.component.html',
})
export class CreatewalletComponent {
  randomPassword:string="";
  copiedToClipboard:boolean=false;

  constructor() { }

  makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
  lengthOfCode = 50;

  generateRandomPassword(){
    this.randomPassword=this.makeRandom(this.lengthOfCode,this.possible)
    this.copiedToClipboard=false
  }

  copyPassword(){
    navigator.clipboard.writeText(this.randomPassword)
    this.copiedToClipboard=true
  }
}

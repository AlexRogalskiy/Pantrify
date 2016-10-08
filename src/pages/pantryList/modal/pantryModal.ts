import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
  templateUrl: "pantryModal.html",
})
export class PantryModal {

  units: number;

 constructor(public viewCtrl: ViewController, params: NavParams) {
   console.log('product', params.get('product'));
   this.units = params.get('product').units;
 }

 dismiss() {
   this.viewCtrl.dismiss();
 }
}
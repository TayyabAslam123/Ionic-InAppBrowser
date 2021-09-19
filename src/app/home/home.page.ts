import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController  } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl: NavController,private iab: InAppBrowser) {






}//construct

ngOnInit(){

  const browser = this.iab.create('https://www.sportsplus.pk','_self',{location:'no'});

}

}//class
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  readonly menuFile:string = '../assets/data/menu.json';
  menuOptions= [];

  constructor(public toastController: ToastController) {
    //this.presentToast();
  }

  ngOnInit() {
      this.getMenu();
  }

  getMenu() {
    fetch(this.menuFile)
      .then(response => response.json())
      .then(json=> {
        this.menuOptions = json;
        console.log(this.menuOptions);
      });
  }
}

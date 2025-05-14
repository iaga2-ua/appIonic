import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.page.html',
  styleUrls: ['./exit.page.scss'],
  standalone: false
})
export class ExitPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }

  async exitApp(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Exit',
      message: 'Exiting app.',
      buttons: ['OK']
    });
    await alert.present();
  }

  navigateWiki(): void {
    this.navCtrl.navigateRoot('/tabs/wiki');
  }

  ngOnInit() {
  }

}

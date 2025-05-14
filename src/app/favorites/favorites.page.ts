import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: false
})
export class FavoritesPage implements OnInit {

  constructor(private srvStorage: StorageService) { }

  public favorites: any[] = [];

  ngOnInit() {
    this.srvStorage.get('favorites').then(data => {
      this.favorites = data??[];
    });
  }

  generateURL(cat: string, id: string) {
    return "/tabs/wiki/article/" + cat + "/" + id;
  }
}

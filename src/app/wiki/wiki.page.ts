import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Category } from '../models/category';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.page.html',
  styleUrls: ['./wiki.page.scss'],
  standalone: false
})
export class WikiPage implements OnInit {
  readonly categoriesMockup:string = "./assets/data/categories.json";
  categories: Category[] = [];
  constructor(private toastController: ToastController) { }
  
  async ngOnInit(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Welcome to the Star Wars Wiki App!',
      duration: 2000,
      position: 'top',
      color: 'primary'
    });
    await toast.present();
    
    this.getData();
  }

  getData() {
    fetch(this.categoriesMockup)
      .then(response => response.json())
      .then(data => {
        this.categories = data;
      })
    }

  selectedCategory: string = "";

  selectCategory(name: string) {
    this.selectedCategory = name;
  }
}

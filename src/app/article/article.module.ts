import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlePageRoutingModule } from './article-routing.module';

import { ArticlePage } from './article.page';
import { StorageService } from '../services/storage.service';
import { Storage } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlePageRoutingModule,
  ],
  declarations: [ArticlePage],
  providers: [StorageService, Storage]
})
export class ArticlePageModule {}

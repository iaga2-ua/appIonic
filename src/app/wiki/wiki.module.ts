import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from '../category/category.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { WikiPageRoutingModule } from './wiki-routing.module';

import { WikiPage } from './wiki.page';
import { WikiService } from '../services/wiki.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WikiPageRoutingModule,
    HttpClientModule
  ],
  providers: [
    WikiService
  ],
  declarations: [WikiPage, CategoryComponent]
})
export class WikiPageModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CarouselSideBarComponent } from './carousel-side-bar/carousel-side-bar.component';
import { ItemComponent } from './item/item.component';
import { ItemService } from './service/item/item.service';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    SideBarComponent,
    CarouselSideBarComponent,
    ItemComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:':id', component:ItemListComponent}
    ])
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }

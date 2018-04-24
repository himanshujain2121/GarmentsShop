import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CarouselSideBarComponent } from './carousel-side-bar/carousel-side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    SideBarComponent,
    CarouselSideBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

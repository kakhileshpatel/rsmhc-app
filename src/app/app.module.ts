import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MarketComponent } from './main/market/market.component';
import { HeadlineComponent } from './main/market/headline/headline.component';
import { FeaturetteComponent } from './main/market/featurette/featurette.component';
import { FeaturetteleftComponent } from './main/market/featuretteleft/featuretteleft.component';
import { FooterComponent } from './main/footer/footer.component';
import { NavScrollerComponent } from './main/nav-scroller/nav-scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CarouselComponent,
    MarketComponent,
    HeadlineComponent,
    FeaturetteComponent,
    FeaturetteleftComponent,
    FooterComponent,
    NavScrollerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

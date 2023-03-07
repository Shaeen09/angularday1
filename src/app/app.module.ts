import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroHomeComponent } from './hero-home/hero-home.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { FooterHeroComponent } from './footer-hero/footer-hero.component';
import { AboutComponent } from './about/about.component';
import { HeroAboutComponent } from './about-page/hero-about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroHomeComponent,
    HeroPageComponent,
    FooterHeroComponent,
    AboutComponent,
    HeroAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

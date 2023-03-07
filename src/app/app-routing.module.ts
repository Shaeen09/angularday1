import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeroHomeComponent } from './hero-home/hero-home.component';

const routes: Routes = [{
  path: "", component: HeroHomeComponent
},
 {
  path:"About", component:AboutComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

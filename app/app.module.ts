import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GalleryComponent } from './gallery/gallery.component';
import {ImageService} from "./image/shared/image.service";
import {ImageFilterpipe} from "./image/shared/filter.pipe";
import {appRoutes} from "../routes";
import {RouterModule} from "@angular/router";
import {ImageDetailComponent} from "./image/image-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GalleryComponent,
    ImageFilterpipe,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageService, ImageFilterpipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

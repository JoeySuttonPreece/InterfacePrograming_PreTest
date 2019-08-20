import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { DetailComponent } from './detail/detail.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationBarComponent,
        FooterBarComponent,
        ThumbnailComponent,
        DetailComponent,
        MovieInfoComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

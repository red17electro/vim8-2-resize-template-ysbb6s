import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import { IfViewportSizeDirective } from './if-viewport-size.directive';
import { ScreenSizeService } from './screenSize.service';

export const IScreenConfig: IConfig = {
    medium: 700,
    large: 1200
}

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent, IfViewportSizeDirective ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: ScreenSizeService, useFactory: () => new ScreenSizeService(IScreenConfig) }
  ]
})
export class AppModule { 
  
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutesAndComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatewalletComponent } from './createwallet/createwallet.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutesAndComponents,
    CreatewalletComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

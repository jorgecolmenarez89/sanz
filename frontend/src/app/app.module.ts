import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormParamsComponent } from './componets/form-params/form-params.component';
import { HistoryComponent } from './componets/history/history.component';
import { NavigationComponent } from './componets/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FormParamsComponent,
    HistoryComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FournisseurComponent } from './componenets/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './componenets/list-fournisseur/list-fournisseur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponent,
    ListFournisseurComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

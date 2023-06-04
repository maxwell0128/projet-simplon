import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPersonneComponent } from './list-personne/list-personne.component';
import { AjoutPersonneComponent } from './ajout-personne/ajout-personne.component';
import { FormsModule} from '@angular/forms';
import { ModifPersonneComponent } from './modif-personne/modif-personne.component';
import { VoirPersonneComponent } from './voir-personne/voir-personne.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonneComponent,
    AjoutPersonneComponent,
    ModifPersonneComponent,
    VoirPersonneComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

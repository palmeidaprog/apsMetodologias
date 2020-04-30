import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PdsComponent } from './pds/pds.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrumComponent } from './scrum/scrum.component';
import { XpComponent } from './xp/xp.component';
import { KanbanComponent } from './kanban/kanban.component';
import { CascataComponent } from './cascata/cascata.component';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    PdsComponent,
    NavbarComponent,
    ScrumComponent,
    XpComponent,
    KanbanComponent,
    CascataComponent,
    TesteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

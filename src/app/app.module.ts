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
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import { DevcompComponent } from './devcomp/devcomp.component';
import { RupComponent } from './rup/rup.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatMenuModule} from "@angular/material/menu";
import { ResultadoComponent } from './resultado/resultado.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';

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
    DevcompComponent,
    RupComponent,
    ApresentacaoComponent,
    ResultadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

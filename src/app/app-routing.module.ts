import { DevcompComponent } from './devcomp/devcomp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdsComponent } from './pds/pds.component';
import { ScrumComponent } from './scrum/scrum.component';
import { XpComponent } from './xp/xp.component';
import { KanbanComponent } from './kanban/kanban.component';
import { CascataComponent } from './cascata/cascata.component';
import { TesteComponent } from './teste/teste.component';
import {RupComponent} from './rup/rup.component';
import {ResultadoComponent} from "./resultado/resultado.component";

const routes: Routes = [
  {
    path: 'pds',
    component: PdsComponent
  },
  {
    path: 'scrum',
    component: ScrumComponent
  },
  {
    path: 'xp',
    component: XpComponent
  },
  {
    path: 'kanban',
    component: KanbanComponent
  },
  {
    path: 'cascata',
    component: CascataComponent
  },
  {
    path:'devcomp',
    component: DevcompComponent
  },
  {
    path:'rup',
    component: RupComponent
  },
  {
    path: 'teste',
    component: TesteComponent
  },
  {
    path: 'resultado',
    component: ResultadoComponent
  },
  {
    path: '',
    component: PdsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

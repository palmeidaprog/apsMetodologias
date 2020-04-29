import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const materialComponents = [
  MatButtonModule,
  MatToolbarModule
] 

@NgModule({
  
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }

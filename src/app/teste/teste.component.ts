import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  segurancaVidaHumanaCtrl: FormControl = new FormControl(false);
  project: boolean;
  deliveryProject: boolean;
  constructor() {
  }


    ngOnInit(): void {
    }

  }

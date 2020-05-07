import { Component, OnInit } from '@angular/core';
import {Metodologia} from '../metodologia';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  resultado: Array<Metodologia> = [];

  constructor() {

  }

  ngOnInit(): void {
    this.resultado = JSON.parse(localStorage.getItem('resultado'));
    this.resultado = this.resultado.sort((m1, m2) =>
      m2.percentual - m1.percentual);
    console.log('ok');
  }

}

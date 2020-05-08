import { Component, OnInit } from '@angular/core';
import {Metodologia} from '../metodologia';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  array: Array<string>;

  constructor() {
    this.array = JSON.parse(localStorage.getItem('lista'));
    // this.array = this.resultados.sort((m1, m2) =>
    //   m2.percentual - m1.percentual);
    console.log('const');
  }

  ngOnInit(): void {
    console.log('ok');
  }

}

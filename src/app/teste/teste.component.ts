import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {PreRequisito} from "../pre-requisito.enum";
import {Tamanho} from "../tamanho.enum";
import {Extensao} from "../extensao.enum";

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  preReqList: Array<PreRequisito> = [
    PreRequisito.QUASE_ESTATICO,
    PreRequisito.POUCO,
    PreRequisito.MODERADO,
    PreRequisito.VOLTATIL
  ];

  tamanhos: Array<Tamanho> = [
    Tamanho.PEQUENA, Tamanho.MEDIA,
    Tamanho.GRANDE
  ];

  extensoes: Array<Extensao> = [
    Extensao.CURTO, Extensao.MEDIA, Extensao.LONGO
  ];

  donoDoProdutoCtrl: FormControl = new FormControl(false);
  multidisciplinarCtrl: FormControl = new FormControl(false);
  extensaoTempoCtrl: FormControl = new FormControl('');
  tamanhoEquipeCtrl: FormControl = new FormControl('');
  utilizacaoParcialCtrl: FormControl = new FormControl('');
  segurancaVidaHumanaCtrl: FormControl = new FormControl(false);
  preReqCtrl: FormControl = new FormControl('');
  equipeIndependenteCtrl: FormControl = new FormControl('');
  project: boolean;
  deliveryProject: boolean;
  constructor() {
  }


    ngOnInit(): void {
    }

  }

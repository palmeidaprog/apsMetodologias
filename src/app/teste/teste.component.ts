import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PreRequisito} from '../pre-requisito.enum';
import {Tamanho} from '../tamanho.enum';
import {Extensao} from '../extensao.enum';
import {Pesos} from '../pesos';
import {Pratica} from '../pratica.enum';
import {Intensidade} from '../intensidade.enum';
import {Probabilidade} from '../probabilidade.enum';
import {Metodologia, Opcao} from "../metodologia";
import {Booleana} from "../booleana.enum";

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
    Tamanho.PEQUENA,
    Tamanho.MEDIA,
    Tamanho.GRANDE
  ];

  intensidades: Array<Intensidade> = [
    Intensidade.FRACA,
    Intensidade.MEDIA,
    Intensidade.FORTE
  ];

  praticas: Array<Pratica> = [
    Pratica.TDD,
    Pratica.PROGRAMACAO_PARES,
    Pratica.PADRONIZACAO_CODIGO
  ];

  extensoes: Array<Extensao> = [
    Extensao.CURTO, Extensao.MEDIA, Extensao.LONGO
  ];

  probabilidades: Array<Probabilidade> = [
    Probabilidade.IMPROVAVEL,
    Probabilidade.POSSIVEL,
    Probabilidade.MUITO_PROVAVEL
  ];

  form: FormGroup;
  donoDoProdutoCtrl: FormControl = new FormControl(false);
  multidisciplinarCtrl: FormControl = new FormControl(false);
  extensaoTempoCtrl: FormControl = new FormControl(null);
  tamanhoEquipeCtrl: FormControl = new FormControl(null);
  utilizacaoParcialCtrl: FormControl = new FormControl(null);
  segurancaVidaHumanaCtrl: FormControl = new FormControl(false);
  preReqCtrl: FormControl = new FormControl('');
  equipeIndependenteCtrl: FormControl = new FormControl('');
  praticaCtrl: FormControl = new FormControl(null);
  comunicacaoCtrl: FormControl = new FormControl(null);
  multiFocoCtrl: FormControl = new FormControl(null);
  documentacaoCtrl: FormControl = new FormControl(null);
  escritorioCtrl: FormControl = new FormControl(null);
  linearCtrl: FormControl = new FormControl(null);
  probabilidadeCtrl: FormControl = new FormControl(null);

  project: boolean;
  deliveryProject: boolean;
  private pesos: Pesos = new Pesos();
  private kanban: Metodologia = new Metodologia('Kanban');
  private xp: Metodologia = new Metodologia('XP');
  private cascata: Metodologia = new Metodologia('Cascata');
  private scrum: Metodologia = new Metodologia('Scrum');
  private rup: Metodologia = new Metodologia('RUP');
  private componentes: Metodologia = new Metodologia('Desenvolvimento em Componentes');

  constructor() { }


  ngOnInit(): void {
    this.criaFormulario();
    this.pesos = new Pesos();
  }

  criaFormulario(): void {
    this.form = new FormGroup({
      donoDoProduto: this.donoDoProdutoCtrl,
      multidisciplinar: this.multidisciplinarCtrl,
      extensaoTempo: this.extensaoTempoCtrl,
      tamanhoEquipe: this.tamanhoEquipeCtrl,
      utilizacaoParcial: this.utilizacaoParcialCtrl,
      segurancaVidaHumana: this.segurancaVidaHumanaCtrl,
      preReqCtrl: this.preReqCtrl,
      equipeIndependente: this.equipeIndependenteCtrl
    });
  }

  validate(): boolean {
    return true;
    // segurancaVidaHumanaCtrl.valid && donoDoProdutoCtrl.valid && multidisciplinarCtrl.valid
    // extensaoTempoCtrl: FormControl = new FormControl('');
    // tamanhoEquipeCtrl: FormControl = new FormControl('');
    // utilizacaoParcialCtrl: FormControl = new FormControl('');
    // segurancaVidaHumanaCtrl: FormControl = new FormControl(false);
    // preReqCtrl: FormControl = new FormControl('');
    // equipeIndependenteCtrl: FormControl = new FormControl('');
  }

  test(): void {
    if (this.segurancaVidaHumanaCtrl.value) {
      this.pesos.adiciona(10, 10, 10, 0);
    } else {
      this.pesos.adiciona(0, 0, 0, 100);
      console.log(this.pesos.cascata);
      this.alert();
      return;
    }

    if (this.utilizacaoParcialCtrl.value) {
      this.pesos.adiciona(20, 20, 20, 0);
    } else {
      this.pesos.kanban = this.pesos.scrum = this.pesos.xp = 0;
      this.pesos.adiciona(0, 0, 0, 100);
      this.alert();
      return;
    }

    if (this.donoDoProdutoCtrl.value) {
      this.pesos.adiciona(10, 5, 5,  0);
    } else {
      this.pesos.adiciona(0, 0, 0,  10);
    }

    if (this.multidisciplinarCtrl.value) {
      this.pesos.adiciona(20, 10, 0,  10);
    } else {
      this.pesos.adiciona(0, 0, 0,  10);
    }

    if (this.preReqCtrl.value === PreRequisito.QUASE_ESTATICO) {
      this.pesos.adiciona(0, 10, 0,  20);
    } else if (this.preReqCtrl.value === PreRequisito.POUCO) {
      this.pesos.adiciona(0, 10, 0,  10);
    } else if (this.preReqCtrl.value === PreRequisito.MODERADO) {
      this.pesos.adiciona(10, 10, 10,  0);
    } else {
      this.pesos.adiciona(20, 10, 20,  0);
    }

    if (this.extensaoTempoCtrl.value === Extensao.CURTO) {
      this.pesos.adiciona(0, 10, 0,  20);
    } else if (this.extensaoTempoCtrl.value === Extensao.MEDIA) {
      this.pesos.adiciona(0, 10, 0,  10);
    } else {
      this.pesos.adiciona(20, 10, 0,  10);
    }

    if (this.tamanhoEquipeCtrl.value === Tamanho.PEQUENA) {
      this.pesos.adiciona(0, 10, 10,  20);
    } else if (this.tamanhoEquipeCtrl.value === Tamanho.MEDIA) {
      this.pesos.adiciona(10, 10, 10,  10);
    } else {
      this.pesos.adiciona(20, 10, 20,  0);
    }

    if (this.equipeIndependenteCtrl.value) {
      this.pesos.adiciona(20, 10, 10,  0);
    } else {
      this.pesos.adiciona(0, 0, 0,  10);
    }

    if (this.praticaCtrl.value === Pratica.TDD) {
      this.pesos.adiciona(20, 10, 10,  0);
    } else if (this.praticaCtrl.value === Pratica.PROGRAMACAO_PARES) {
      this.pesos.adiciona(0, 0, 20,  0);
    } else {
      this.pesos.adiciona(0, 5, 0,  20);
    }

    this.alert();
  }

  private inicializaPesos(): void {
    this.pesosKanban();
  }

  private pesosKanban(): void {
    this.kanban.pratica = [
      new Opcao(Pratica.TDD, 10),
      new Opcao(Pratica.PROGRAMACAO_PARES, 10),
      new Opcao(Pratica.PADRONIZACAO_CODIGO, 10)
    ];

    this.kanban.comunicacao = [
      new Opcao(Intensidade.FRACA, 10),
      new Opcao(Intensidade.MEDIA, 10),
      new Opcao(Intensidade.FORTE, 5)
    ];

    this.kanban.segurancaVidaHumana = [
      new Opcao(Booleana.SIM, 0),
      new Opcao(Booleana.NAO, 5)
    ];

    this.kanban.equipeIndependente = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 5)
    ];

    this.kanban.utilizacaoParcial = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 5)
    ];

    this.kanban.extensaoTempo = [
      new Opcao(Extensao.CURTO, 20),
      new Opcao(Extensao.MEDIA, 10),
      new Opcao(Extensao.LONGO, 10)
    ];

    this.kanban.preReq = [
      new Opcao(PreRequisito.QUASE_ESTATICO, 10),
      new Opcao(PreRequisito.POUCO, 10),
      new Opcao(PreRequisito.MODERADO, 10),
      new Opcao(PreRequisito.VOLTATIL, 10)
    ];

    this.kanban.tamanhoEquipe = [
      new Opcao(Tamanho.PEQUENA, 10),
      new Opcao(Tamanho.MEDIA, 10),
      new Opcao(Tamanho.GRANDE, 10)
    ];

    this.kanban.multidisciplinar = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 10)
    ];

    this.kanban.donoDoProduto = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 10)
    ];

    this.kanban.multiFoco = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 10)
    ];

    this.kanban.documentacao = [
      new Opcao(Booleana.SIM, 0),
      new Opcao(Booleana.NAO, 10)
    ];
  }

  private alert(): void {
    const rank = this.pesos.generateRank();
    window.alert(`Sua metologia escolhida é ${rank[0].nome} com ${rank[0].pontos.toFixed(2)}%. ` +
      `Seguido de ${rank[1].nome} (${rank[1].pontos.toFixed(2)}%),` +
      `${rank[2].nome} (${rank[2].pontos.toFixed(2)}%). ${rank[3].nome} (${rank[3].pontos.toFixed(2)}%)`);
  }


}

import {Component, OnInit} from '@angular/core';
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
import {Router} from "@angular/router";

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
  private metodologias: Array<Metodologia> = [
    this.kanban, this.xp, this.cascata, this.scrum, this.componentes,
    this.rup
  ];

  constructor(private router: Router) {

  }


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

  private resetaPontos(): void {
    this.xp.pontos = 0;
    this.rup.pontos = 0;
    this.componentes.pontos = 0;
    this.cascata.pontos = 0;
    this.scrum.pontos = 0;
    this.kanban.pontos = 0;
  }

  private inicializaPesos(): void {
    this.pesosKanban();
    this.pesosScrum();
    this.pesosXP();
    this.pesosComponentes();
    this.pesosRUP();
    this.pesosCascata();
  }

  private pesosCascata(): void {
    this.cascata.pratica = [
      new Opcao(Pratica.TDD, 0),
      new Opcao(Pratica.PROGRAMACAO_PARES, 5),
      new Opcao(Pratica.PADRONIZACAO_CODIGO, 5)
    ];

    this.cascata.comunicacao = [
      new Opcao(Intensidade.FRACA, 10),
      new Opcao(Intensidade.MEDIA, 10),
      new Opcao(Intensidade.FORTE, 10)
    ];

    this.cascata.segurancaVidaHumana = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 0)
    ];

    this.cascata.equipeIndependente = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 10)
    ];

    this.cascata.utilizacaoParcial = [
      new Opcao(Booleana.SIM, 0),
      new Opcao(Booleana.NAO, 20)
    ];

    this.cascata.extensaoTempo = [
      new Opcao(Extensao.CURTO, 20),
      new Opcao(Extensao.MEDIA, 10),
      new Opcao(Extensao.LONGO, 5)
    ];

    this.cascata.preReq = [
      new Opcao(PreRequisito.QUASE_ESTATICO, 20),
      new Opcao(PreRequisito.POUCO, 10),
      new Opcao(PreRequisito.MODERADO, 0),
      new Opcao(PreRequisito.VOLTATIL, 0)
    ];

    this.cascata.tamanhoEquipe = [
      new Opcao(Tamanho.PEQUENA, 10),
      new Opcao(Tamanho.MEDIA, 10),
      new Opcao(Tamanho.GRANDE, 10)
    ];

    this.cascata.multidisciplinar = [
      new Opcao(Booleana.SIM, 0),
      new Opcao(Booleana.NAO, 10)
    ];

    this.cascata.donoDoProduto = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 10)
    ];

    this.cascata.multiFoco = [
      new Opcao(Booleana.SIM, 0),
      new Opcao(Booleana.NAO, 10)
    ];

    this.cascata.documentacao = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 0)
    ];

    this.cascata.escritorio = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 0)
    ];

    this.cascata.linear = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 0)
    ];

    // cultura da empreas para modificar metodologias
    this.cascata.probabilidade = [
      new Opcao(Probabilidade.IMPROVAVEL, 20),
      new Opcao(Probabilidade.POSSIVEL, 10),
      new Opcao(Probabilidade.MUITO_PROVAVEL, 0)
    ];
  }

  private pesosRUP(): void {
    this.rup.pratica = [
      new Opcao(Pratica.TDD, 20),
      new Opcao(Pratica.PROGRAMACAO_PARES, 10),
      new Opcao(Pratica.PADRONIZACAO_CODIGO, 20)
    ];

    this.rup.comunicacao = [
      new Opcao(Intensidade.FRACA, 0),
      new Opcao(Intensidade.MEDIA, 10),
      new Opcao(Intensidade.FORTE, 20)
    ];

    this.rup.segurancaVidaHumana = [
      new Opcao(Booleana.SIM, 0),
      new Opcao(Booleana.NAO, 5)
    ];

    this.rup.equipeIndependente = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 5)
    ];

    this.rup.utilizacaoParcial = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 5)
    ];

    this.rup.extensaoTempo = [
      new Opcao(Extensao.CURTO, 0),
      new Opcao(Extensao.MEDIA, 10),
      new Opcao(Extensao.LONGO, 20)
    ];

    this.rup.preReq = [
      new Opcao(PreRequisito.QUASE_ESTATICO, 10),
      new Opcao(PreRequisito.POUCO, 10),
      new Opcao(PreRequisito.MODERADO, 10),
      new Opcao(PreRequisito.VOLTATIL, 10)
    ];

    this.rup.tamanhoEquipe = [
      new Opcao(Tamanho.PEQUENA, 10),
      new Opcao(Tamanho.MEDIA, 10),
      new Opcao(Tamanho.GRANDE, 10)
    ];

    this.rup.multidisciplinar = [
      new Opcao(Booleana.SIM, 5),
      new Opcao(Booleana.NAO, 10)
    ];

    this.rup.donoDoProduto = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 10)
    ];

    this.rup.multiFoco = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 10)
    ];

    this.rup.documentacao = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 0)
    ];

    this.rup.escritorio = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 10)
    ];

    this.rup.linear = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 10)
    ];

    // cultura da empreas para modificar metodologias
    this.rup.probabilidade = [
      new Opcao(Probabilidade.IMPROVAVEL, 5),
      new Opcao(Probabilidade.POSSIVEL, 10),
      new Opcao(Probabilidade.MUITO_PROVAVEL, 10)
    ];
  }

  private pesosComponentes(): void {
    this.componentes.pratica = [
      new Opcao(Pratica.TDD, 10),
      new Opcao(Pratica.PROGRAMACAO_PARES, 20),
      new Opcao(Pratica.PADRONIZACAO_CODIGO, 10)
    ];

    this.componentes.comunicacao = [
      new Opcao(Intensidade.FRACA, 0),
      new Opcao(Intensidade.MEDIA, 10),
      new Opcao(Intensidade.FORTE, 20)
    ];

    this.componentes.segurancaVidaHumana = [
      new Opcao(Booleana.SIM, 0),
      new Opcao(Booleana.NAO, 5)
    ];

    this.componentes.equipeIndependente = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 5)
    ];

    this.componentes.utilizacaoParcial = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 10)
    ];

    this.componentes.extensaoTempo = [
      new Opcao(Extensao.CURTO, 5),
      new Opcao(Extensao.MEDIA, 10),
      new Opcao(Extensao.LONGO, 20)
    ];

    this.componentes.preReq = [
      new Opcao(PreRequisito.QUASE_ESTATICO, 20),
      new Opcao(PreRequisito.POUCO, 10),
      new Opcao(PreRequisito.MODERADO, 10),
      new Opcao(PreRequisito.VOLTATIL, 5)
    ];

    this.componentes.tamanhoEquipe = [
      new Opcao(Tamanho.PEQUENA, 10),
      new Opcao(Tamanho.MEDIA, 10),
      new Opcao(Tamanho.GRANDE, 10)
    ];

    this.componentes.multidisciplinar = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 10)
    ];

    this.componentes.donoDoProduto = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 10)
    ];

    this.componentes.multiFoco = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 10)
    ];

    this.componentes.documentacao = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 5)
    ];

    this.componentes.escritorio = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 5)
    ];

    this.componentes.linear = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 10)
    ];

    // cultura da empreas para modificar metodologias
    this.componentes.probabilidade = [
      new Opcao(Probabilidade.IMPROVAVEL, 5),
      new Opcao(Probabilidade.POSSIVEL, 10),
      new Opcao(Probabilidade.MUITO_PROVAVEL, 10)
    ];
  }

  private pesosXP(): void {
    this.xp.pratica = [
      new Opcao(Pratica.TDD, 20),
      new Opcao(Pratica.PROGRAMACAO_PARES, 20),
      new Opcao(Pratica.PADRONIZACAO_CODIGO, 20)
    ];

    this.xp.comunicacao = [
      new Opcao(Intensidade.FRACA, 0),
      new Opcao(Intensidade.MEDIA, 10),
      new Opcao(Intensidade.FORTE, 20)
    ];

    this.xp.segurancaVidaHumana = [
      new Opcao(Booleana.SIM, 0),
      new Opcao(Booleana.NAO, 5)
    ];

    this.xp.equipeIndependente = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 5)
    ];

    this.xp.utilizacaoParcial = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 5)
    ];

    this.xp.extensaoTempo = [
      new Opcao(Extensao.CURTO, 5),
      new Opcao(Extensao.MEDIA, 10),
      new Opcao(Extensao.LONGO, 10)
    ];

    this.xp.preReq = [
      new Opcao(PreRequisito.QUASE_ESTATICO, 10),
      new Opcao(PreRequisito.POUCO, 10),
      new Opcao(PreRequisito.MODERADO, 10),
      new Opcao(PreRequisito.VOLTATIL, 10)
    ];

    this.xp.tamanhoEquipe = [
      new Opcao(Tamanho.PEQUENA, 20),
      new Opcao(Tamanho.MEDIA, 10),
      new Opcao(Tamanho.GRANDE, 10)
    ];

    this.xp.multidisciplinar = [
      new Opcao(Booleana.SIM, 0),
      new Opcao(Booleana.NAO, 20)
    ];

    this.xp.donoDoProduto = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 5)
    ];

    this.xp.multiFoco = [
      new Opcao(Booleana.SIM, 0),
      new Opcao(Booleana.NAO, 20)
    ];

    this.xp.documentacao = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 0)
    ];

    this.xp.escritorio = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 5)
    ];

    this.xp.linear = [
      new Opcao(Booleana.SIM, 5),
      new Opcao(Booleana.NAO, 10)
    ];

    // cultura da empreas para modificar metodologias
    this.xp.probabilidade = [
      new Opcao(Probabilidade.IMPROVAVEL, 0),
      new Opcao(Probabilidade.POSSIVEL, 10),
      new Opcao(Probabilidade.MUITO_PROVAVEL, 20)
    ];
  }

  private pesosScrum(): void {
    this.scrum.pratica = [
      new Opcao(Pratica.TDD, 10),
      new Opcao(Pratica.PROGRAMACAO_PARES, 10),
      new Opcao(Pratica.PADRONIZACAO_CODIGO, 5)
    ];

    this.scrum.comunicacao = [
      new Opcao(Intensidade.FRACA, 0),
      new Opcao(Intensidade.MEDIA, 10),
      new Opcao(Intensidade.FORTE, 20)
    ];

    this.scrum.segurancaVidaHumana = [
      new Opcao(Booleana.SIM, 0),
      new Opcao(Booleana.NAO, 5)
    ];

    this.scrum.equipeIndependente = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 0)
    ];

    this.scrum.utilizacaoParcial = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 5)
    ];

    this.scrum.extensaoTempo = [
      new Opcao(Extensao.CURTO, 5),
      new Opcao(Extensao.MEDIA, 10),
      new Opcao(Extensao.LONGO, 10)
    ];

    this.scrum.preReq = [
      new Opcao(PreRequisito.QUASE_ESTATICO, 10),
      new Opcao(PreRequisito.POUCO, 10),
      new Opcao(PreRequisito.MODERADO, 20),
      new Opcao(PreRequisito.VOLTATIL, 20)
    ];

    this.scrum.tamanhoEquipe = [
      new Opcao(Tamanho.PEQUENA, 5),
      new Opcao(Tamanho.MEDIA, 10),
      new Opcao(Tamanho.GRANDE, 10)
    ];

    this.scrum.multidisciplinar = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 10)
    ];

    this.scrum.donoDoProduto = [
      new Opcao(Booleana.SIM, 20),
      new Opcao(Booleana.NAO, 0)
    ];

    this.scrum.multiFoco = [
      new Opcao(Booleana.SIM, 5),
      new Opcao(Booleana.NAO, 10)
    ];

    this.scrum.documentacao = [
      new Opcao(Booleana.SIM, 5),
      new Opcao(Booleana.NAO, 20)
    ];

    this.scrum.escritorio = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 10)
    ];

    this.scrum.linear = [
      new Opcao(Booleana.SIM, 0),
      new Opcao(Booleana.NAO, 20)
    ];

    // cultura da empreas para modificar metodologias
    this.scrum.probabilidade = [
      new Opcao(Probabilidade.IMPROVAVEL, 0),
      new Opcao(Probabilidade.POSSIVEL, 10),
      new Opcao(Probabilidade.MUITO_PROVAVEL, 20)
    ];
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

    this.kanban.escritorio = [
      new Opcao(Booleana.SIM, 10),
      new Opcao(Booleana.NAO, 10)
    ];

    this.kanban.linear = [
      new Opcao(Booleana.SIM, 5),
      new Opcao(Booleana.NAO, 10)
    ];

    // cultura da empreas para modificar metodologias
    this.kanban.probabilidade = [
      new Opcao(Probabilidade.IMPROVAVEL, 0),
      new Opcao(Probabilidade.POSSIVEL, 10),
      new Opcao(Probabilidade.MUITO_PROVAVEL, 10)
    ];
  }

  calculate(): void {
    this.inicializaPesos();
    this.resetaPontos();

    if (this.segurancaVidaHumanaCtrl.value === 'Sim' ||
      this.utilizacaoParcialCtrl.value === 'Não') {
      this.cascata.pontos = 100;
      this.cascata.percentual = 100;
      this.calculaPercentuais();
      this.mostraResultado();
      return;
    }

    this.kanban.praticaResposta = this.praticaCtrl.value;
    this.scrum.praticaResposta = this.praticaCtrl.value;
    this.xp.praticaResposta = this.praticaCtrl.value;
    this.componentes.praticaResposta = this.praticaCtrl.value;
    this.rup.praticaResposta = this.praticaCtrl.value;
    this.cascata.praticaResposta = this.praticaCtrl.value;

    this.kanban.comunicacaoResposta = this.comunicacaoCtrl.value;
    this.scrum.comunicacaoResposta = this.comunicacaoCtrl.value;
    this.xp.comunicacaoResposta = this.comunicacaoCtrl.value;
    this.componentes.comunicacaoResposta = this.comunicacaoCtrl.value;
    this.rup.comunicacaoResposta = this.comunicacaoCtrl.value;
    this.cascata.comunicacaoResposta = this.comunicacaoCtrl.value;

    this.kanban.segurancaVidaHumanaResposta = this.converteBoolean(this.segurancaVidaHumanaCtrl.value);
    this.scrum.segurancaVidaHumanaResposta = this.converteBoolean(this.segurancaVidaHumanaCtrl.value);
    this.xp.segurancaVidaHumanaResposta = this.converteBoolean(this.segurancaVidaHumanaCtrl.value);
    this.componentes.segurancaVidaHumanaResposta = this.converteBoolean(this.segurancaVidaHumanaCtrl.value);
    this.rup.segurancaVidaHumanaResposta = this.converteBoolean(this.segurancaVidaHumanaCtrl.value);
    this.cascata.segurancaVidaHumanaResposta = this.converteBoolean(this.segurancaVidaHumanaCtrl.value);

    this.kanban.equipeIndependenteResposta = this.converteBoolean(this.equipeIndependenteCtrl.value);
    this.scrum.equipeIndependenteResposta = this.converteBoolean(this.equipeIndependenteCtrl.value);
    this.xp.equipeIndependenteResposta = this.converteBoolean(this.equipeIndependenteCtrl.value);
    this.componentes.equipeIndependenteResposta = this.converteBoolean(this.equipeIndependenteCtrl.value);
    this.rup.equipeIndependenteResposta = this.converteBoolean(this.equipeIndependenteCtrl.value);
    this.cascata.equipeIndependenteResposta = this.converteBoolean(this.equipeIndependenteCtrl.value);

    this.kanban.utilizacaoParcialResposta = this.converteBoolean(this.utilizacaoParcialCtrl.value);
    this.scrum.utilizacaoParcialResposta = this.converteBoolean(this.utilizacaoParcialCtrl.value);
    this.xp.utilizacaoParcialResposta = this.converteBoolean(this.utilizacaoParcialCtrl.value);
    this.componentes.utilizacaoParcialResposta = this.converteBoolean(this.utilizacaoParcialCtrl.value);
    this.rup.utilizacaoParcialResposta = this.converteBoolean(this.utilizacaoParcialCtrl.value);
    this.cascata.utilizacaoParcialResposta = this.converteBoolean(this.utilizacaoParcialCtrl.value);

    this.kanban.extensaoTempoResposta = this.extensaoTempoCtrl.value;
    this.scrum.extensaoTempoResposta = this.extensaoTempoCtrl.value;
    this.xp.extensaoTempoResposta = this.extensaoTempoCtrl.value;
    this.componentes.extensaoTempoResposta = this.extensaoTempoCtrl.value;
    this.rup.extensaoTempoResposta = this.extensaoTempoCtrl.value;
    this.cascata.extensaoTempoResposta = this.extensaoTempoCtrl.value;

    this.kanban.preReqResposta = this.preReqCtrl.value;
    this.scrum.preReqResposta = this.preReqCtrl.value;
    this.xp.preReqResposta = this.preReqCtrl.value;
    this.componentes.preReqResposta = this.preReqCtrl.value;
    this.rup.preReqResposta = this.preReqCtrl.value;
    this.cascata.preReqResposta = this.preReqCtrl.value;

    this.kanban.tamanhoEquipeResposta = this.tamanhoEquipeCtrl.value;
    this.scrum.tamanhoEquipeResposta = this.tamanhoEquipeCtrl.value;
    this.xp.tamanhoEquipeResposta = this.tamanhoEquipeCtrl.value;
    this.componentes.tamanhoEquipeResposta = this.tamanhoEquipeCtrl.value;
    this.rup.tamanhoEquipeResposta = this.tamanhoEquipeCtrl.value;
    this.cascata.tamanhoEquipeResposta = this.tamanhoEquipeCtrl.value;

    this.kanban.multidisciplinarResposta = this.converteBoolean(this.multidisciplinarCtrl.value);
    this.scrum.multidisciplinarResposta = this.converteBoolean(this.multidisciplinarCtrl.value);
    this.xp.multidisciplinarResposta = this.converteBoolean(this.multidisciplinarCtrl.value);
    this.componentes.multidisciplinarResposta = this.converteBoolean(this.multidisciplinarCtrl.value);
    this.rup.multidisciplinarResposta = this.converteBoolean(this.multidisciplinarCtrl.value);
    this.cascata.multidisciplinarResposta = this.converteBoolean(this.multidisciplinarCtrl.value);

    this.kanban.donoDoProdutoResposta = this.converteBoolean(this.donoDoProdutoCtrl.value);
    this.scrum.donoDoProdutoResposta = this.converteBoolean(this.donoDoProdutoCtrl.value);
    this.xp.donoDoProdutoResposta = this.converteBoolean(this.donoDoProdutoCtrl.value);
    this.componentes.donoDoProdutoResposta = this.converteBoolean(this.donoDoProdutoCtrl.value);
    this.rup.donoDoProdutoResposta = this.converteBoolean(this.donoDoProdutoCtrl.value);
    this.cascata.donoDoProdutoResposta = this.converteBoolean(this.donoDoProdutoCtrl.value);

    this.kanban.multiFocoResposta = this.converteBoolean(this.multiFocoCtrl.value);
    this.scrum.multiFocoResposta = this.converteBoolean(this.multiFocoCtrl.value);
    this.xp.multiFocoResposta = this.converteBoolean(this.multiFocoCtrl.value);
    this.componentes.multiFocoResposta = this.converteBoolean(this.multiFocoCtrl.value);
    this.rup.multiFocoResposta = this.converteBoolean(this.multiFocoCtrl.value);
    this.cascata.multiFocoResposta = this.converteBoolean(this.multiFocoCtrl.value);

    this.kanban.documentacaoResposta = this.converteBoolean(this.documentacaoCtrl.value);
    this.scrum.documentacaoResposta = this.converteBoolean(this.documentacaoCtrl.value);
    this.xp.documentacaoResposta = this.converteBoolean(this.documentacaoCtrl.value);
    this.componentes.documentacaoResposta = this.converteBoolean(this.documentacaoCtrl.value);
    this.rup.documentacaoResposta = this.converteBoolean(this.documentacaoCtrl.value);
    this.cascata.documentacaoResposta = this.converteBoolean(this.documentacaoCtrl.value);

    this.kanban.escritorioResposta = this.converteBoolean(this.escritorioCtrl.value);
    this.scrum.escritorioResposta = this.converteBoolean(this.escritorioCtrl.value);
    this.xp.escritorioResposta = this.converteBoolean(this.escritorioCtrl.value);
    this.componentes.escritorioResposta = this.converteBoolean(this.escritorioCtrl.value);
    this.rup.escritorioResposta = this.converteBoolean(this.escritorioCtrl.value);
    this.cascata.escritorioResposta = this.converteBoolean(this.escritorioCtrl.value);

    this.kanban.linearResposta = this.converteBoolean(this.linearCtrl.value);
    this.scrum.linearResposta = this.converteBoolean(this.linearCtrl.value);
    this.xp.linearResposta = this.converteBoolean(this.linearCtrl.value);
    this.componentes.linearResposta = this.converteBoolean(this.linearCtrl.value);
    this.rup.linearResposta = this.converteBoolean(this.linearCtrl.value);
    this.cascata.linearResposta = this.converteBoolean(this.linearCtrl.value);

    this.kanban.probabilidadeResposta = this.probabilidadeCtrl.value;
    this.scrum.probabilidadeResposta = this.probabilidadeCtrl.value;
    this.xp.probabilidadeResposta = this.probabilidadeCtrl.value;
    this.componentes.probabilidadeResposta = this.probabilidadeCtrl.value;
    this.rup.probabilidadeResposta = this.probabilidadeCtrl.value;
    this.cascata.probabilidadeResposta = this.probabilidadeCtrl.value;

    this.calculaPercentuais();
    // this.router.navigate(['/resultado']);
  }

  calculaPercentuais(): void {
    const total = this.kanban.pontos + this.xp.pontos + this.cascata.pontos
      + this.scrum.pontos + this.componentes.pontos + this.rup.pontos;

    this.metodologias.forEach(metodologia => {
      metodologia.percentual = metodologia.pontos / total * 100;
    });
    localStorage.setItem('resultado', JSON.stringify(this.metodologias));
    this.mostraResultado();
  }

  private converteBoolean(valor: string): Booleana {
    return valor === 'Sim' ? Booleana.SIM : Booleana.NAO;
    // const msg = valor ? Booleana.SIM : Booleana.NAO;
    // console.log(msg);
    // return valor ? Booleana.SIM : Booleana.NAO;
  }

  private alert(): void {
    const rank = this.pesos.generateRank();
    window.alert(`Sua metologia escolhida é ${rank[0].nome} com ${rank[0].pontos.toFixed(2)}%. ` +
      `Seguido de ${rank[1].nome} (${rank[1].pontos.toFixed(2)}%),` +
      `${rank[2].nome} (${rank[2].pontos.toFixed(2)}%). ${rank[3].nome} (${rank[3].pontos.toFixed(2)}%)`);
  }

  private mostraResultado(): void {
    let msg = 'Seu resultado com os percentuais de compatibilidade são: ';
    this.metodologias = this.metodologias.sort((m1, m2) =>
      m2.percentual - m1.percentual);
    this.metodologias.forEach((metodologia) => {
      msg += metodologia.nome + ' - ' + metodologia.percentual.toFixed(2) + ' ';
    });
    window.alert(msg);
  }
}

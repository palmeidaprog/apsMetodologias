import {Pratica} from "./pratica.enum";

export class Opcao {
  escolha: string;
  pontos: number;

  constructor(escolha: string, pontos: number) {
    this.escolha = escolha;
    this.pontos = pontos;
  }

}

export class Metodologia {
  private _nome: string;
  private _pontos: number;
  private _percentual: number;

  private _pratica: Array<Opcao> = [];
  private _praticaResposta: string;
  private _comunicacao: Array<Opcao> = [];
  private _comunicacaoResposta: string;
  private _donoDoProduto: Array<Opcao> = [];
  private _donoDoProdutoResposta: string;
  private _multidisciplinar: Array<Opcao> = [];
  private _multidisciplinarResposta: string;
  private _extensaoTempo: Array<Opcao> = [];
  private _extensaoTempoResposta: string;
  private _tamanhoEquipe: Array<Opcao> = [];
  private _tamanhoEquipeResposta: string;
  private _utilizacaoParcial: Array<Opcao> = [];
  private _utilizacaoParcialResposta: string;
  private _segurancaVidaHumana: Array<Opcao> = [];
  private _segurancaVidaHumanaResposta: string;
  private _preReq: Array<Opcao> = [];
  private _preReqResposta: string;
  private _equipeIndependente: Array<Opcao> = [];
  private _equipeIndependenteResposta: string;
  private _multiFoco: Array<Opcao> = [];
  private _multiFocoResposta: string;
  private _documentacao: Array<Opcao> = [];
  private _documentacaoResposta: string;
  private _escritorio: Array<Opcao> = [];
  private _escritorioResposta: string;
  private _linear: Array<Opcao> = [];
  private _linearResposta: string;
  private _probabilidade: Array<Opcao> = [];
  private _probabilidadeResposta: string;


  constructor(nome: string) {
    this._nome = nome;
    this._pontos = 0;
    this._percentual = 0.0;
  }

  set nome(value: string) {
    this._nome = value;
  }

  set pontos(value: number) {
    this._pontos = value;
  }

  set percentual(value: number) {
    this._percentual = value;
  }

  set pratica(value: Array<Opcao>) {
    this._pratica = this.organizaOpcoesPorPonto(value);
  }

  set praticaResposta(value: string) {
    this._praticaResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._pratica, value);
  }

  set comunicacao(value: Array<Opcao>) {
    this._comunicacao = this.organizaOpcoesPorPonto(value);
  }

  set comunicacaoResposta(value: string) {
    this._comunicacaoResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._comunicacao, value);
  }

  set donoDoProduto(value: Array<Opcao>) {
    this._donoDoProduto = this.organizaOpcoesPorPonto(value);
  }

  set donoDoProdutoResposta(value: string) {
    this._donoDoProdutoResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._donoDoProduto, value);
  }

  set multidisciplinar(value: Array<Opcao>) {
    this._multidisciplinar = this.organizaOpcoesPorPonto(value);
  }

  set multidisciplinarResposta(value: string) {
    this._multidisciplinarResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._multidisciplinar, value);
  }

  set extensaoTempo(value: Array<Opcao>) {
    this._extensaoTempo = this.organizaOpcoesPorPonto(value);
  }

  set extensaoTempoResposta(value: string) {
    this._extensaoTempoResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._extensaoTempo, value);
  }

  set tamanhoEquipe(value: Array<Opcao>) {
    this._tamanhoEquipe = this.organizaOpcoesPorPonto(value);
  }

  set tamanhoEquipeResposta(value: string) {
    this._tamanhoEquipeResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._tamanhoEquipe, value);
  }

  set utilizacaoParcial(value: Array<Opcao>) {
    this._utilizacaoParcial = this.organizaOpcoesPorPonto(value);
  }

  set utilizacaoParcialResposta(value: string) {
    this._utilizacaoParcialResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._utilizacaoParcial, value);
  }

  set segurancaVidaHumana(value: Array<Opcao>) {
    this._segurancaVidaHumana = this.organizaOpcoesPorPonto(value);
  }

  set segurancaVidaHumanaResposta(value: string) {
    this._segurancaVidaHumanaResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._segurancaVidaHumana, value);
  }

  set preReq(value: Array<Opcao>) {
    this._preReq = this.organizaOpcoesPorPonto(value);
  }

  set preReqResposta(value: string) {
    this._preReqResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._preReq, value);

  }

  set equipeIndependente(value: Array<Opcao>) {
    this._equipeIndependente = this.organizaOpcoesPorPonto(value);
  }

  set equipeIndependenteResposta(value: string) {
    this._equipeIndependenteResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._equipeIndependente, value);

  }

  set multiFoco(value: Array<Opcao>) {
    this._multiFoco = this.organizaOpcoesPorPonto(value);
  }

  set multiFocoResposta(value: string) {
    this._multiFocoResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._multiFoco, value);

  }

  set documentacao(value: Array<Opcao>) {
    this._documentacao = this.organizaOpcoesPorPonto(value);
  }

  set documentacaoResposta(value: string) {
    this._documentacaoResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._documentacao, value);
  }

  set escritorio(value: Array<Opcao>) {
    this._escritorio = this.organizaOpcoesPorPonto(value);
  }

  set escritorioResposta(value: string) {
    this._escritorioResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._escritorio, value);

  }

  set linear(value: Array<Opcao>) {
    this._linear = this.organizaOpcoesPorPonto(value);
  }

  set linearResposta(value: string) {
    this._linearResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._linear, value);

  }

  set probabilidade(value: Array<Opcao>) {
    this._probabilidade = this.organizaOpcoesPorPonto(value);
  }

  set probabilidadeResposta(value: string) {
    this._probabilidadeResposta = value;
    this._pontos += this.getPontosEscolhiddos(this._probabilidade, value);

  }

  get nome(): string {
    return this._nome;
  }

  get pontos(): number {
    return this._pontos;
  }

  get percentual(): number {
    return this._percentual;
  }

  get pratica(): Array<Opcao> {
    return this._pratica;
  }

  get praticaResposta(): string {
    return this._praticaResposta;
  }

  get comunicacao(): Array<Opcao> {
    return this._comunicacao;
  }

  get comunicacaoResposta(): string {
    return this._comunicacaoResposta;
  }

  get donoDoProduto(): Array<Opcao> {
    return this._donoDoProduto;
  }

  get donoDoProdutoResposta(): string {
    return this._donoDoProdutoResposta;
  }

  get multidisciplinar(): Array<Opcao> {
    return this._multidisciplinar;
  }

  get multidisciplinarResposta(): string {
    return this._multidisciplinarResposta;
  }

  get extensaoTempo(): Array<Opcao> {
    return this._extensaoTempo;
  }

  get extensaoTempoResposta(): string {
    return this._extensaoTempoResposta;
  }

  get tamanhoEquipe(): Array<Opcao> {
    return this._tamanhoEquipe;
  }

  get tamanhoEquipeResposta(): string {
    return this._tamanhoEquipeResposta;
  }

  get utilizacaoParcial(): Array<Opcao> {
    return this._utilizacaoParcial;
  }

  get utilizacaoParcialResposta(): string {
    return this._utilizacaoParcialResposta;
  }

  get segurancaVidaHumana(): Array<Opcao> {
    return this._segurancaVidaHumana;
  }

  get segurancaVidaHumanaResposta(): string {
    return this._segurancaVidaHumanaResposta;
  }

  get preReq(): Array<Opcao> {
    return this._preReq;
  }

  get preReqResposta(): string {
    return this._preReqResposta;
  }

  get equipeIndependente(): Array<Opcao> {
    return this._equipeIndependente;
  }

  get equipeIndependenteResposta(): string {
    return this._equipeIndependenteResposta;
  }

  get multiFoco(): Array<Opcao> {
    return this._multiFoco;
  }

  get multiFocoResposta(): string {
    return this._multiFocoResposta;
  }

  get documentacao(): Array<Opcao> {
    return this._documentacao;
  }

  get documentacaoResposta(): string {
    return this._documentacaoResposta;
  }

  get escritorio(): Array<Opcao> {
    return this._escritorio;
  }

  get escritorioResposta(): string {
    return this._escritorioResposta;
  }

  get linear(): Array<Opcao> {
    return this._linear;
  }

  get linearResposta(): string {
    return this._linearResposta;
  }

  get probabilidade(): Array<Opcao> {
    return this._probabilidade;
  }

  get probabilidadeResposta(): string {
    return this._probabilidadeResposta;
  }

  private getPontosEscolhiddos(opcoes: Array<Opcao>, escolha: string): number {
    const opcaoEscolhida = opcoes.find(opcao => opcao.escolha === escolha);
    return opcaoEscolhida ? opcaoEscolhida.pontos : 0;
  }

  private organizaOpcoesPorPonto(opcoes: Array<Opcao>): Array<Opcao> {
    return opcoes.sort((o1, o2) => o2.pontos - o1.pontos);
  }
}

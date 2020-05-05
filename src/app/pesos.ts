export class Metologia {
  pontos: number;

  constructor(public nome: string, pontos?: number) {
    this.pontos = pontos ? pontos : 0;
  }
}

export class Pesos {
  scrum = 0;
  kanban = 0;
  xp = 0;
  cascata = 0;

  adiciona(scrum: number, kanban: number, xp: number, cascata: number): void {
    this.cascata += cascata;
    this.kanban += kanban;
    this.xp += xp;
    this.scrum += scrum;
  }

  generateRank(): Array<Metologia> {
    const rank: Array<Metologia> = [
      new Metologia('Kanban', this.percentualKanban()),
      new Metologia('XP', this.percentualXP()),
      new Metologia('Scrum', this.percentualScrum()),
      new Metologia('Cascata', this.percentualCascata())
    ];

    return rank.sort( (a, b) => b.pontos - a.pontos);
  }

  percentualXP(): number {
    return this.calcula(this.xp);
  }

  percentualKanban(): number {
    return this.calcula(this.kanban);
  }

  percentualScrum(): number {
    return this.calcula(this.scrum);
  }

  percentualCascata(): number {
    return this.calcula(this.cascata);
  }

  private calcula(valor: number): number {
    const soma = this.cascata + this.kanban + this.xp + this.scrum;
    return valor / soma * 100;
  }
}
